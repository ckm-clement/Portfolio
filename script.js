// You can add JavaScript functionality here if needed
// For example, smooth scrolling on navigation links

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  