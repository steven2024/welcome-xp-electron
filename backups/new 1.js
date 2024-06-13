  
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