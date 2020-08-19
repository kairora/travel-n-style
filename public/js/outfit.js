let womensAccessories = ['/images/womens/accessory1.png', '/images/womens/accessory2.png', '/images/womens/accessory3.png', '/images/womens/accessory4.png', '/images/womens/accessory5.png'];

let mensAccessories = ['/images/mens/accessory1.png', '/images/mens/accessory2.png', '/images/mens/accessory3.png', '/images/mens/accessory4.png', '/images/mens/accessory5.png'];

let womenAccessoryIndex = Math.floor((Math.random() * womensAccessories.length));

let menAccessoryIndex = Math.floor((Math.random() * mensAccessories.length));

let womensJackets = ['/images/womens/jacket1.png', '/images/womens/jacket2.png', '/images/womens/jacket3.png', '/images/womens/jacket5.png'];
let mensJackets = ['/images/mens/jacket1.png', '/images/mens/jacket2.png', '/images/mens/jacket3.png', '/images/mens/jacket5.png'];

let womenJacketIndex = Math.floor((Math.random() * womensJackets.length));
let menJacketIndex = Math.floor((Math.random() * mensJackets.length));

let womensPants = ['/images/womens/pant1.png', '/images/womens/pant2.png', '/images/womens/pant3.png', '/images/womens/pant4.png', '/images/womens/pant5.png'];
let mensPants = ['/images/mens/pants1.png', '/images/mens/pants2.png', '/images/mens/pants3.png', '/images/mens/pants4.png', '/images/mens/pants5.png'];


let womenPantIndex = Math.floor((Math.random() * womensPants.length));

let menPantIndex = Math.floor((Math.random() * mensPants.length));

let womensShoes = ['/images/womens/shoe1.png', '/images/womens/shoe2.png', '/images/womens/shoe3.png', '/images/womens/shoe4.png', '/images/womens/shoe5.png'];
let mensShoes = ['/images/mens/shoe1.png', '/images/mens/shoe2.png', '/images/mens/shoe3.png', '/images/mens/shoe4.png', '/images/mens/shoe5.png'];

let womenShoeIndex = Math.floor((Math.random() * womensShoes.length));
let menShoeIndex = Math.floor((Math.random() * mensShoes.length));

let womensDress = ['/images/womens/dress1.png', '/images/womens/dress2.png', '/images/womens/dress3.png', '/images/womens/dress4.png', '/images/womens/dress5.png'];
let mensShorts = ['/images/mens/shorts1.png', '/images/mens/shorts2.png', '/images/mens/shorts3.png', '/images/mens/shorts4.png', '/images/mens/shorts5.png'];

let womenDressIndex = Math.floor((Math.random() * womensDress.length));

let menShortIndex = Math.floor((Math.random() * mensShorts.length));

let womensSweaters = ['/images/womens/sweater1.png', '/images/womens/sweater2.png', '/images/womens/sweater3.png', '/images/womens/sweater4.png'];
let mensSweaters = ['/images/mens/sweater1.png', '/images/mens/sweater2.png', '/images/mens/sweater3.png', '/images/mens/sweater4.png', '/images/mens/sweater5.png']

let womenSweaterIndex = Math.floor((Math.random() * womensSweaters.length));
let menSweaterIndex = Math.floor((Math.random() * mensSweaters.length));


let womensTees = ['/images/womens/tee1.png', '/images/womens/tee2.png', '/images/womens/tee3.png', '/images/womens/tee4.png', '/images/womens/tee5.png'];
let mensTees = ['/images/mens/tee1.png', '/images/mens/tee2.png', '/images/mens/tee3.png', '/images/mens/tee4.png'];

let womenTeeIndex = Math.floor((Math.random() * womensTees.length));

let menTeeIndex = Math.floor((Math.random() * mensTees.length));


$(document).ready(() => {
  //adding event listener to search button
  $("#city-btn").on("click", ((event) => {
    event.preventDefault();
    $("#error").text('');
    let city = $("#city").val().toUpperCase();
    $.ajax({
      url: "/api/weather?city=" + city,
      method: "GET",
    }).then(function (responsefc) {
      console.log(responsefc);
    });
  }));
  // function to make ajax call to get data
});

