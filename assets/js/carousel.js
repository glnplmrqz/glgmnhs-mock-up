function initializeCarousel() {
  const carousel = document.querySelector(".organization-carousel");

  if (!carousel) {
    return;
  }

  const slides = [...carousel.querySelectorAll(".organization-slide")];
  const dotsContainer = carousel.querySelector(".carousel-dots");
  const previousButton = carousel.querySelector(
    '[aria-label="Previous organization"]',
  );
  const nextButton = carousel.querySelector(
    '[aria-label="Next organization"]',
  );

  if (!slides.length || !dotsContainer || !previousButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  function renderSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    dotsContainer.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentSlide;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  }

  slides.forEach((_, slideIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Show organization ${slideIndex + 1}`);
    dot.addEventListener("click", () => renderSlide(slideIndex));
    dotsContainer.appendChild(dot);
  });

  previousButton.addEventListener("click", () => renderSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => renderSlide(currentSlide + 1));
  renderSlide(0);
}

initializeCarousel();