$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstName = $("input#firstname-input");
  const lastName = $("input#lastname-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const gender =$(".gender");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      firstname: firstName.val().trim(),
      lastname: lastName.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      gender: gender.val()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
    firstName.val("");
    lastName.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(userData) {
    console.log(userData);
    $.post("/api/signup", userData)
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
