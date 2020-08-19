$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.firstname);
    $(".genderDiv").text(data.gender);
  });

  // $(".stateDown").on("click", function(event) {
  //   const state = $(this).text();
  //   console.log(typeof state)
  //   $(".stateLabel").html(state)
  //   //     // console.log(id)
  //   //   // $.ajax("/api/burgers/" + id, {
  //   //   //   type: "PUT",
  //   //   //   data: devState
  //   //   // }).then(
  //   //   //   function() {
  //   //   //     location.reload();
  //   //   //   }
  //   //   // );
  // });
  $(".cityDown").on("click", function() {
    const city = $(this).text();
    const state = $(this)
      .closest(".dropdown-submenu")
      .find(".stateDown")
      .text();
    $(".cityLabel").html(city + ", " + state);
    console.log(city);
    //   // $.ajax("/api/burgers/" + id, {
    //   //   type: "PUT",
    //   //   data: devState
    //   // }).then(
    //   //   function() {
    //   //     location.reload();
    //   //   }
    //   // );

    showWeather(city);
  });

  // function to make ajax call to get data
  function showWeather(city) {
    //declaring letiables
    const queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const queryUrlForecast =
      "https://api.openweathermap.org/data/2.5/onecall?lat=";
    const appID = process.env.WEATHER_API_KEY;

    if (city !== "") {
      $.ajax({
        url: queryUrl + city + "&units=imperial" + "&APPID=" + appID,
        method: "GET"
      }).then(result => {
        console.log(result);
        $(".future").empty();
        for (let i = 0; i < result.list.length; i++) {
          if (result.list[i].dt_txt.search("12:00:00") !== -1) {
            const forecastSect = $("<section>", { class: "day" });
            // creates p el with date text
            const formattedDate = new Date(
              result.list[i].dt_txt
            ).toLocaleDateString();
            localStorage.setItem("foreDates", formattedDate);
            // creates an img tag with icon
            const foreIcon = $("<img>").attr(
              "src",
              "http://openweathermap.org/img/wn/" +
                result.list[i].weather[0].icon +
                "@2x.png"
            );
            localStorage.setItem("foreIcons", foreIcon);
            // creates a p with the temp
            const fiveTemp = result.list[i].main.temp_max;
            const foreTemp = "Temperature: " + fiveTemp + " °F";
            localStorage.setItem("foreTemps", foreTemp);
            // creates a p with the humidity
            const humidity =
              "Humidity: " + JSON.stringify(result.list[i].main.humidity) + "%";
            const foreHum = humidity;
            localStorage.setItem("foreHums", foreHum);
            // append date
            $(".future").append(forecastSect.append(formattedDate, $("<br>")));
            // append icon
            $(".future").append(forecastSect.append(foreIcon, $("<br>")));
            // append Temp
            $(".future").append(forecastSect.append(foreTemp, $("<br>")));
            // append Humidity
            $(".future").append(forecastSect.append(foreHum));
          }
        }

        // $.ajax({
        //   url: queryUrlForecast + latitude + "&lon=" + longitude + "&units=imperial" + "&APPID=" + appID,
        //   method: "GET"
        // }).then((responsefc) => {
        //   console.log(responsefc);
        // })
      });
    } else {
      $("#error").text("Please enter a city name");
    }
  }
});
