let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const nav = document.querySelector(".nav");

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});