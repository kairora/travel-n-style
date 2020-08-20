/* eslint-disable */
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
app.post("/api/fav",(req,res) =>{
  console.log(req.body)
  db.Outfit.create(req.body).then(sponse=>{
    //find the user associate4d, 
    //create new outfit record
    console.log(sponse)
    res.json({ok:true, sponse})
  }).catch(err=>{throw err})
});
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        gender: req.user.gender
      });
    }
  });
  app.get("/api/weather", (req, res) => {
    let city =req.query.city;
    //declaring variables
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    let queryUrlForcast = "https://api.openweathermap.org/data/2.5/onecall?lat=";
    let appID = process.env.WEATHER_API_KEY;
    console.log("appID:",appID);
    if (city !== "") {
      axios.get(queryUrl + city + "&units=imperial" + "&APPID=" + appID)
        .then(function (response) {
          console.log(response);
          res.json(response.data);
        }).catch(err=>console.error("city apit error:",err));
    }
  });
};