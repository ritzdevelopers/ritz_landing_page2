function carouselFunction() {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
  });
}

function navbarAnimation() {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      right: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  closeIcon.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      right: "-100%",
      duration: 0.5,
      ease: "power2.in",
    });
  });
}
navbarAnimation();

carouselFunction();
