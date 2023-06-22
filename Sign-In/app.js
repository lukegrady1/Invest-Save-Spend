document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Here you can perform further validation if needed
  
    // Send the data to the server-side script for processing and authentication
    // You would typically use AJAX or fetch to make a request to the server here
    // In this example, we'll simulate successful authentication
    var authenticated = true;
  
    if (authenticated) {
      // Redirect the user to another HTML page after successful sign-in
      window.location.href = "/Calculate/index.html";
    } else {
      // Display an error message if authentication fails
      alert("Invalid username or password");
    }
  
    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
  
  document.getElementById("create-account-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
  
    // Hide the sign-in form and display the create account form
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("create-account-form").style.display = "block";
  });
  
  document.getElementById("create-account-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input values
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
  
    // Here you can perform further validation if needed
  
    // Send the data to the server-side script for processing and database storage
    // You would typically use AJAX or fetch to make a request to the server here
    // In this example, we'll just log the values to the console
    console.log("New Username: " + newUsername);
    console.log("New Password: " + newPassword);
  
    // Clear the input fields
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
  });
  