
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu-links a");
    const currentURL = window.location.href;

    links.forEach(link => {
      if (link.href === currentURL) {
        link.classList.add("active");
      }
    });
  });

