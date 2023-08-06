// Function to load content from separate HTML files
function loadContent(section) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", section + ".html", true);
  xhttp.send();
}

// Add click event listeners to navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const section = link.getAttribute("href").substring(1);
      loadContent(section);
    });
  });
});

// Load default content on page load (e.g., aboutMe.html)
window.onload = function() {
  loadContent("aboutMe");
};

