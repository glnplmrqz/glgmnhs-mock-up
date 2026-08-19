const navigation = document.querySelector(".nav-bar");
const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelectorAll(".nav-links a");

if (navigation && menuToggle) {
  const closeMenu = () => {
    navigation.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Open navigation menu";
    menuToggle.querySelector("i").className = "fa-solid fa-bars";
  };

  const toggleMenu = () => {
    const isOpen = navigation.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector(".sr-only").textContent = isOpen
      ? "Close navigation menu"
      : "Open navigation menu";
    menuToggle.querySelector("i").className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  };

  menuToggle.addEventListener("click", toggleMenu);
  navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
