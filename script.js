
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  async function loadPage(page) {
    try {
      const response = await fetch(page);

      if (!response.ok) {
        throw new Error(`Could not load ${page}`);
      }

      content.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      content.innerHTML = "<p>Unable to load this page.</p>";
    }
  }

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const pages = {
        "#aboutMe": "aboutMe.html",
        "#research": "research.html",
        "#teaching": "teaching.html",
        "#Blogs": "Blogs.html"
      };

      const page = pages[link.getAttribute("href")];

      if (page) {
        loadPage(page);
      }
    });
  });

  loadPage("aboutMe.html");
});
