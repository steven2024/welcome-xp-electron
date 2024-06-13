// Get the user template
const userTemplate = document.querySelector('#user-template');

// Clone the template
const userClone = document.importNode(userTemplate.content, true);

// Set the username
const usernameElement = userClone.querySelector('.user-name');
usernameElement.textContent = 'Administrator'; // Replace 'Administrator' with the desired username

// Add click event listener to the username element
usernameElement.addEventListener('click', () => {
  showLoginPrompt();
});

// Function to show the login prompt
function showLoginPrompt() {
  // Clear the username element content
  usernameElement.textContent = '';

  // Create the login box and prompt
  const loginBox = document.createElement('div');
  loginBox.classList.add('login-box');

  loginBox.innerHTML = `
    <div class="prompt">Administrator</div>
    <div class="small-text">Type your password:</div>
    <input type="password" class="password-input" autofocus>
    <button class="submit-button">Submit</button>
  `;

  // Append the login box to the username element
  usernameElement.appendChild(loginBox);

  // Add event listener to the submit button
  const submitButton = loginBox.querySelector('.submit-button');
  submitButton.addEventListener('click', () => {
    const passwordInput = loginBox.querySelector('.password-input').value;
    if (passwordInput === 'password') {
      displayWelcomeScreen();
    } else {
      showPasswordErrorPopup(); // Call this function to show the error popup

      // Clear the password input field after showing the error popup
      loginBox.querySelector('.password-input').value = '';
    }
  });
}
// Function to show the password error popup
function showPasswordErrorPopup() {
  const passwordErrorPopup = document.querySelector('.password-error-popup');
  passwordErrorPopup.classList.add('active');
}

// Function to display the welcome screen
function displayWelcomeScreen() {
  // Display Welcome Screen
  let template = document.getElementById("welcome-template");
  let welcomeBodyContent = template.content.cloneNode(true);
  let mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = "";
  mainContent.appendChild(welcomeBodyContent);

  // Play sound
  const sound = new Audio('xp.mp3'); // Replace with the actual path to your sound file
  sound.play();

  // Delay window close
  setTimeout(() => {
    window.close();
  }, 5000);
}

// Append the user listing to the userListings div
const userListings = document.querySelector('#userListings');
userListings.appendChild(userClone);

