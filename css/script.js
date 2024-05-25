  // JavaScript to change navbar background color on scroll
  window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('bg-scroll');
    } else {
        navbar.classList.remove('bg-scroll');
    }
};

// Function to handle button clicks
function handleButtonClicks(containerId) {
// Get the container element
var btnContainer = document.getElementById(containerId);
// Get all buttons with class="nav-link" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Remove the "active" class from the previously active button
    var current = btnContainer.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    // Add the "active" class to the clicked button
    this.classList.add("active");
  });
}
}

// Call the function for both containers
handleButtonClicks("navbarScroll");
handleButtonClicks("pills-tab");