const loginFormHandler = async (event) => {
    event.preventDefault();
    
    console.log('loginFormHandler')
    // Collect values from the login form
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        alert(document.location)
        document.location.replace("/reservation");
        // alert(document.location)
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);