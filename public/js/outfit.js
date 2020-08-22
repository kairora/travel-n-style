const womensSummerAccessories = [
  "../assets/images/womens/accessory1.png",
  "../assets/images/womens/accessory2.png",
  "../assets/images/womens/accessory3.png",
  "../assets/images/womens/accessory4.png",
  "../assets/images/womens/accessory5.png"
];
const womensSummerShoes = [
  "../assets/images/womens/shoe1.png",
  "../assets/images/womens/shoe2.png",
  "../assets/images/womens/shoe3.png",
  "../assets/images/womens/shoe4.png",
  "../assets/images/womens/shoe5.png"
];
const womensSummerPants = [
  "../assets/images/womens/pant1.png",
  "../assets/images/womens/pant2.png",
  "../assets/images/womens/pant3.png",
  "../assets/images/womens/pant4.png",
  "../assets/images/womens/pant5.png",
  "../assets/images/womens/skirt1.png"
];
const womensSummerTops = [
  "../assets/images/womens/tee1.png",
  "../assets/images/womens/tee2.png",
  "../assets/images/womens/tee3.png",
  "../assets/images/womens/tee4.png",
  "../assets/images/womens/tee5.png",
  "../assets/images/womens/dress1.png",
  "../assets/images/womens/dress3.png",
  "../assets/images/womens/dress4.png",
  "../assets/images/womens/dress5.png"
];
const womenFallPants = [
  "../assets/images/womens/jeans1.png",
  "../assets/images/womens/jeans2.png",
  "../assets/images/womens/pant3.png",
  "../assets/images/womens/pant4.png",
  "../assets/images/womens/pant5.png"
];
const womensSweaters = [
  "../assets/images/womens/sweater1.png",
  "../assets/images/womens/sweater2.png",
  "../assets/images/womens/sweater3.png",
  "../assets/images/womens/sweater4.png",
  "../assets/images/womens/jacket1.png",
  "../assets/images/womens/jacket2.png",
  "../assets/images/womens/jacket3.png",
  "../assets/images/womens/jacket4.png"
];
const womensFallShoes = [
  "../assets/images/womens/boots1.png",
  "../assets/images/womens/boots2.png",
  "../assets/images/womens/boots3.png"
];
const womensWinterJackets = [
  "../assets/images/womens/winterjacket1.png",
  "../assets/images/womens/winterjacket2.png",
  "../assets/images/womens/winterjacket3.png"
];
const womensWinterAccessories = [
  "../assets/images/womens/winteracc1.png",
  "../assets/images/womens/winteracc2.png",
  "../assets/images/womens/winteracc3.png"
];
const womensWinterBoots = [
  "../assets/images/womens/wintershoe1.png",
  "../assets/images/womens/wintershoe2.png",
  "../assets/images/womens/wintershoe3.png"
];
const womenWinterPants = [
  "../assets/images/womens/winterpant1.png",
  "../assets/images/womens/winterpant2.png",
  "../assets/images/womens/winterpant3.png"
];
const mensSummerAccessories = [
  "../assets/images/mens/accessory1.png",
  "../assets/images/mens/accessory2.png",
  "../assets/images/mens/accessory3.png",
  "../assets/images/mens/accessory4.png",
  "../assets/images/mens/accessory5.png"
];
const mensSummerShorts = [
  "../assets/images/mens/shorts1.png",
  "../assets/images/mens/shorts2.png",
  "../assets/images/mens/shorts3.png",
  "../assets/images/mens/shorts4.png",
  "../assets/images/mens/shorts5.png"
];
const mensSummerTees = [
  "../assets/images/mens/tee1.png",
  "../assets/images/mens/tee2.png",
  "../assets/images/mens/tee3.png",
  "../assets/images/mens/tee4.png"
];
const mensShoes = [
  "../assets/images/mens/shoe1.png",
  "../assets/images/mens/shoe2.png",
  "../assets/images/mens/shoe3.png",
  "../assets/images/mens/shoe4.png",
  "../assets/images/mens/shoe5.png"
];
const mensSweaters = [
  "../assets/images/mens/sweater1.png",
  "../assets/images/mens/sweater2.png",
  "../assets/images/mens/sweater3.png",
  "../assets/images/mens/sweater4.png",
  "../assets/images/mens/sweater5.png"
];
const mensPants = [
  "../assets/images/mens/pant1.png",
  "../assets/images/mens/pant2.png",
  "../assets/images/mens/pant3.png",
  "../assets/images/mens/pant4.png",
  "../assets/images/mens/pant5.png"
];
const menswinterJackets = [
  "../assets/images/mens/jacket1.png",
  "../assets/images/mens/jacket2.png",
  "../assets/images/mens/jacket3.png",
  "../assets/images/mens/jacket5.png"
];
const menWinterPants = [
  "../assets/images/mens/winterpant1.png",
  "../assets/images/mens/winterpant2.png",
  "../assets/images/mens/winterpant3.png"
];
const mensWinterAccessories = [
  "../assets/images/mens/winteracc1.png",
  "../assets/images/mens/winteracc2.png",
  "../assets/images/mens/winteracc3.png"
];
const mensWinterBoots = [
  "../assets/images/mens/wintershoe1.png",
  "../assets/images/mens/wintershoe2.png",
  "../assets/images/mens/wintershoe3.png"
];
let userId;
function carouselImg(el, imgArr) {
  $(el).empty();
  for (let i = 0; i < imgArr.length; i++) {
    const carouselItem = $("<div>");
    if (i === 0) {
      carouselItem.attr("class", "carousel-item active");
    } else {
      carouselItem.attr("class", "carousel-item");
    }
    $(carouselItem).append(
      "<img src='" + imgArr[i] + "' height='200' width='200'>"
    );
    $(el).append(carouselItem);
    // $('#top1Img').empty().append('<img src="..//assets/images/womens/tee1.png" height="200" width="200">')
  }
}
$(document).ready(() => {
  $("#outfit").hide();
  $("#temp-card").hide();
  //function to get outfit from db
  function getOutfits(id) {
    let idString = id || "";
    if (idString) {
      idString = "/id/" + idString;
    }
    $.get("/api/fav" + idString, data => {
      const favArray = [];
      for (let i = 0; i < data.length; i++) {
        favArray.push(data[i].top);
        favArray.push(data[i].bottom);
        favArray.push(data[i].accessory);
        favArray.push(data[i].shoe);
      }
      carouselImg("#showfav1", favArray);
    });
  }
  //to get the out fit image url from outfit table
  $("#saved-fav").on("click", event => {
    event.preventDefault();
    $("#showFav").show();
    getOutfits(userId);
  });
  //to retrive the gender value from users table
  $.get("/api/user_data").then(data => {
    userId = data.id;
    function displayWeather(response) {
      // // displays city name + date
      $(".currentcity").text(
        $("#city").val() + " " + "(" + response.UTCdate + ")"
      );
      // icon
      const icon = $("<img>").attr(
        "src",
        "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
      );
      $(".currentcity").append(icon);
      // temperature display and set into localStorage
      $("#ctemp").text("Temperature: " + response.main.temp.toFixed(1) + " °F");
      // humidity display and set into localStorage
      $("#chumid").text("Humidity: " + response.main.humidity + "%");
      // wind speed display and set into localStorage
      $("#cwind").text("Wind Speed: " + response.wind.speed + " MPH");
    }
    //adding event listener to search button
    $("#city-btn").on("click", event => {
      event.preventDefault();
      $("#outfit").show();
      $("#temp-card").show();
      $("#error").text("");
      $("#showFav").hide();
      const city = $("#city")
        .val()
        .toUpperCase();
      $.ajax({
        url: "/api/weather?city=" + city,
        method: "GET"
      }).then(response => {
        displayWeather(response);
        const min = Math.round(response.main.temp_min);
        $("#tempLow").text(min + "º");
        const max = Math.round(response.main.temp_max);
        $("#tempHi").text(max + "º");
        const current = Math.round(response.main.temp);
        $("#temp").text(current);
        $("#city").text(response.name);
        $(".weatherImg").attr(
          "src",
          "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        );
        $(".weatherImg").attr("id", "icon");
        const description = response.weather[0].main;
        $("#description").text(description);
        if (response.main.temp >= 70 && data.gender === "female") {
          carouselImg("#top1Img", womensSummerTops);
          carouselImg("#bottom1Img", womensSummerPants);
          carouselImg("#shoe1Img", womensSummerShoes);
          carouselImg("#accessory1Img", womensSummerAccessories);
        } else if (response.main.temp >= 70 && data.gender === "male") {
          carouselImg("#top1Img", mensSummerTees);
          carouselImg("#bottom1Img", mensSummerShorts);
          carouselImg("#shoe1Img", mensShoes);
          carouselImg("#accessory1Img", mensSummerAccessories);
        } else if (response.main.temp >= 50 && data.gender === "male") {
          carouselImg("#top1Img", mensSweaters);
          carouselImg("#bottom1Img", mensPants);
          carouselImg("#shoe1Img", mensShoes);
          carouselImg("#accessory1Img", mensSummerAccessories);
        } else if (response.main.temp >= 50 && data.gender === "female") {
          carouselImg("#top1Img", womensSweaters);
          carouselImg("#bottom1Img", womenFallPants);
          carouselImg("#shoe1Img", womensFallShoes);
          carouselImg("#accessory1Img", womensSummerAccessories);
        } else if (response.main.temp < 50 && data.gender === "female") {
          carouselImg("#top1Img", womensWinterJackets);
          carouselImg("#bottom1Img", womenWinterPants);
          carouselImg("#shoe1Img", womensWinterBoots);
          carouselImg("#accessory1Img", womensWinterAccessories);
        } else if (response.main.temp < 50 && data.gender === "male") {
          carouselImg("#top1Img", menswinterJackets);
          carouselImg("#bottom1Img", menWinterPants);
          carouselImg("#shoe1Img", mensWinterBoots);
          carouselImg("#accessory1Img", mensWinterAccessories);
        }
      });
    });
    $("#fav-fit").on("click", event => {
      event.preventDefault();
      const bottom = $("#bottom .active img");
      const top = $("#top .active img");
      const shoe = $("#shoe .active img");
      const accessory = $("#accessory .active img");

      const stubs = {
        top: top[0].currentSrc,
        bottom: bottom[0].currentSrc,
        shoe: shoe[0].currentSrc,
        accessory: accessory[0].currentSrc,
        UserId: data.id
      };
      $.ajax({
        type: "POST",
        url: "/api/fav",
        data: stubs
      });
    });
  });
});
