/* eslint-disable */
let womensAccessories = [
  "/images/womens/accessory1.png",
  "/images/womens/accessory2.png",
  "/images/womens/accessory3.png",
  "/images/womens/accessory4.png",
  "/images/womens/accessory5.png"
];
let mensAccessories = [
  "/images/mens/accessory1.png",
  "/images/mens/accessory2.png",
  "/images/mens/accessory3.png",
  "/images/mens/accessory4.png",
  "/images/mens/accessory5.png"
];
let womenAccessoryIndex = Math.floor(Math.random() * womensAccessories.length);
let menAccessoryIndex = Math.floor(Math.random() * mensAccessories.length);
let womensJackets = [
  "/images/womens/jacket1.png",
  "/images/womens/jacket2.png",
  "/images/womens/jacket3.png",
  "/images/womens/jacket5.png"
];
let mensJackets = [
  "/images/mens/jacket1.png",
  "/images/mens/jacket2.png",
  "/images/mens/jacket3.png",
  "/images/mens/jacket5.png"
];
let womenJacketIndex = Math.floor(Math.random() * womensJackets.length);
let menJacketIndex = Math.floor(Math.random() * mensJackets.length);
let womensPants = [
  "/images/womens/pant1.png",
  "/images/womens/pant2.png",
  "/images/womens/pant3.png",
  "/images/womens/pant4.png",
  "/images/womens/pant5.png"
];
let mensPants = [
  "/images/mens/pants1.png",
  "/images/mens/pants2.png",
  "/images/mens/pants3.png",
  "/images/mens/pants4.png",
  "/images/mens/pants5.png"
];
let womenPantIndex = Math.floor(Math.random() * womensPants.length);
let menPantIndex = Math.floor(Math.random() * mensPants.length);
let womensShoes = [
  "/images/womens/shoe1.png",
  "/images/womens/shoe2.png",
  "/images/womens/shoe3.png",
  "/images/womens/shoe4.png",
  "/images/womens/shoe5.png"
];
let mensShoes = [
  "/images/mens/shoe1.png",
  "/images/mens/shoe2.png",
  "/images/mens/shoe3.png",
  "/images/mens/shoe4.png",
  "/images/mens/shoe5.png"
];
let womenShoeIndex = Math.floor(Math.random() * womensShoes.length);
let menShoeIndex = Math.floor(Math.random() * mensShoes.length);
let womensDress = [
  "/images/womens/dress1.png",
  "/images/womens/dress2.png",
  "/images/womens/dress3.png",
  "/images/womens/dress4.png",
  "/images/womens/dress5.png"
];
let mensShorts = [
  "/images/mens/shorts1.png",
  "/images/mens/shorts2.png",
  "/images/mens/shorts3.png",
  "/images/mens/shorts4.png",
  "/images/mens/shorts5.png"
];
let womenDressIndex = Math.floor(Math.random() * womensDress.length);
let menShortIndex = Math.floor(Math.random() * mensShorts.length);
let womensSweaters = [
  "/images/womens/sweater1.png",
  "/images/womens/sweater2.png",
  "/images/womens/sweater3.png",
  "/images/womens/sweater4.png"
];
let mensSweaters = [
  "/images/mens/sweater1.png",
  "/images/mens/sweater2.png",
  "/images/mens/sweater3.png",
  "/images/mens/sweater4.png",
  "/images/mens/sweater5.png"
];
let womenSweaterIndex = Math.floor(Math.random() * womensSweaters.length);
let menSweaterIndex = Math.floor(Math.random() * mensSweaters.length);
let womensTees = [
  "/images/womens/tee1.png",
  "/images/womens/tee2.png",
  "/images/womens/tee3.png",
  "/images/womens/tee4.png",
  "/images/womens/tee5.png"
];
let mensTees = [
  "/images/mens/tee1.png",
  "/images/mens/tee2.png",
  "/images/mens/tee3.png",
  "/images/mens/tee4.png"
];
let womenTeeIndex = Math.floor(Math.random() * womensTees.length);
let menTeeIndex = Math.floor(Math.random() * mensTees.length);
$(document).ready(() => {
  var gender = $.get("/api/user_data").then(data => {
    console.log(data.gender);
    let m = moment();

    function displayWeather(response) {
      // converts timezone to UTC offset in minutes
      let UTC = response.timezone / 60;
      // inputs UTC offset and outputs a date stored in let
      let date = m.utcOffset(UTC).format("M/DD/YYYY");
      // displays city name + date
      $(".currentcity").text($("#city").val() + " " + "(" + date + ")");
      // icon
      let icon = $("<img>").attr(
        "src",
        "http://openweathermap.org/img/w/" +
        response.weather[0].icon +
        ".png"
      );
      $(".currentcity").append(icon);
      // temperature display and set into localStorage
      $("#ctemp").text(
        "Temperature: " + response.main.temp.toFixed(1) + " °F"
      );
      // humidity display and set into localStorage
      $("#chumid").text("Humidity: " + response.main.humidity + "%");
      // wind speed display and set into localStorage
      $("#cwind").text("Wind Speed: " + response.wind.speed + " MPH");
    }
    //adding event listener to search button
    $("#city-btn").on("click", ((event) => {
      event.preventDefault();
      $("#error").text('');
      let city = $("#city").val().toUpperCase();
      $.ajax({
        url: "/api/weather?city=" + city,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        displayWeather(response)
        let min = Math.round(response.main.temp_min);
        $('#tempLow').text(min + 'º');
        let max = Math.round(response.main.temp_max);
        $('#tempHi').text(max + 'º');
        let current = Math.round(response.main.temp);
        $('#temp').text(current);
        $('#city').text(response.name);
        $('.weatherImg').attr('src', 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
        $('.weatherImg').attr('id', 'icon');
        let description = response.weather[0].main;
        $('#description').text(description);
        if (response.main.temp >= 70 && data.gender == "female") {
          $('#top1Img').append('<img src="../assets/images/womens/tee1.png" height="200" width="200">')
          $('#top2Img').append('<img src="../assets/images/womens/tee2.png" height="200" width="200">')
          $('#top3Img').append('<img src="../assets/images/womens/dress1.png" height="200" width="200">')
          $('#bottom1Img').append('<img src="../assets/images/womens/pant1.png" height="200" width="200">')
          $('#bottom2Img').append('<img src="../assets/images/womens/pant2.png" height="200" width="200">')
          $('#bottom3Img').append('<img src="../assets/images/womens/pant3.png" height="200" width="200">')
          $('#shoe1Img').append('<img src="../assets/images/womens/shoe1.png" height="200" width="200">')
          $('#shoe2Img').append('<img src="../assets/images/womens/shoe2.png" height="200" width="200">')
          $('#shoe3Img').append('<img src="../assets/images/womens/shoe3.png" height="200" width="200">')
          $('#acc1Img').append('<img src="../assets/images/womens/accessory1.png" height="200" width="200">')
          $('#acc2Img').append('<img src="../assets/images/womens/accessory2.png" height="200" width="200">')
          $('#acc3Img').append('<img src="../assets/images/womens/accessory3.png" height="200" width="200">')
        } else if (response.main.temp >= 70 && data.gender == "male") {
          $('#top1Img').append('<img src="../assets/images/mens/tee1.png" height="200" width="200">')
          $('#top2Img').append('<img src="../assets/images/mens/tee2.png" height="200" width="200">')
          $('#top3Img').append('<img src="../assets/images/mens/tee3.png" height="200" width="200">')
          $('#bottom1Img').append('<img src="../assets/images/mens/shorts1.png" height="200" width="200">')
          $('#bottom2Img').append('<img src="../assets/images/mens/pant2.png" height="200" width="200">')
          $('#bottom3Img').append('<img src="../assets/images/mens/pant3.png" height="200" width="200">')
          $('#shoe1Img').append('<img src="../assets/images/mens/shoe1.png" height="200" width="200">')
          $('#shoe2Img').append('<img src="../assets/images/mens/shoe2.png" height="200" width="200">')
          $('#shoe3Img').append('<img src="../assets/images/mens/shoe3.png" height="200" width="200">')
          $('#acc1Img').append('<img src="../assets/images/mens/accessory1.png" height="200" width="200">')
          $('#acc2Img').append('<img src="../assets/images/mens/accessory2.png" height="200" width="200">')
          $('#acc3Img').append('<img src="../assets/images/mens/accessory3.png" height="200" width="200">')
        }
        else if (response.main.temp >= 40 && data.gender == "male") {
          $('#top1Img').append('<img src="../assets/images/mens/sweater1.png" height="200" width="200">')
          $('#top2Img').append('<img src="../assets/images/mens/sweater2.png" height="200" width="200">')
          $('#top3Img').append('<img src="../assets/images/mens/sweater3.png" height="200" width="200">')
          $('#bottom1Img').append('<img src="../assets/images/mens/pant1.png" height="200" width="200">')
          $('#bottom2Img').append('<img src="../assets/images/mens/pant2.png" height="200" width="200">')
          $('#bottom3Img').append('<img src="../assets/images/mens/pant3.png" height="200" width="200">')
          $('#shoe1Img').append('<img src="../assets/images/mens/shoe1.png" height="200" width="200">')
          $('#shoe2Img').append('<img src="../assets/images/mens/shoe2.png" height="200" width="200">')
          $('#shoe3Img').append('<img src="../assets/images/mens/shoe3.png" height="200" width="200">')
          $('#acc1Img').append('<img src="../assets/images/mens/accessory1.png" height="200" width="200">')
          $('#acc2Img').append('<img src="../assets/images/mens/accessory2.png" height="200" width="200">')
          $('#acc3Img').append('<img src="../assets/images/mens/accessory3.png" height="200" width="200">')
        } else if (response.main.temp >= 40 && data.gender == "female") {
          $('#top1Img').append('<img src="../assets/images/womens/sweater1.png" height="200" width="200">')
          $('#top2Img').append('<img src="../assets/images/womens/sweater2.png" height="200" width="200">')
          $('#top3Img').append('<img src="../assets/images/womens/sweater3.png" height="200" width="200">')
          $('#bottom1Img').append('<img src="../assets/images/womens/pant1.png" height="200" width="200">')
          $('#bottom2Img').append('<img src="../assets/images/womens/pant2.png" height="200" width="200">')
          $('#bottom3Img').append('<img src="../assets/images/womens/pant3.png" height="200" width="200">')
          $('#shoe1Img').append('<img src="../assets/images/womens/shoe1.png" height="200" width="200">')
          $('#shoe2Img').append('<img src="../assets/images/womens/shoe2.png" height="200" width="200">')
          $('#shoe3Img').append('<img src="../assets/images/womens/shoe3.png" height="200" width="200">')
          $('#acc1Img').append('<img src="../assets/images/womens/accessory1.png" height="200" width="200">')
          $('#acc2Img').append('<img src="../assets/images/womens/accessory2.png" height="200" width="200">')
          $('#acc3Img').append('<img src="../assets/images/womens/accessory3.png" height="200" width="200">')
        }
      });
    }));
    $("#fav-fit").on("click", event=>{
      event.preventDefault()
      const stubs = {top:'/assets/images/womens/tee1.png',bottom: "assets/images/womens/pant1.png",
     accent: "/assets/images/womens/shoe3.png",
    UserId: data.id
  }
     $.ajax({
      type: "POST",
      url: "/api/fav",
      data: stubs,
      success: (success,theOtherThing)=>{
        console.log(success)
        console.error(theOtherThing)
      },
    })
    })
  });
  });


