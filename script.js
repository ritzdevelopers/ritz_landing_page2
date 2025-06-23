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
gsap.registerPlugin(ScrollTrigger);

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
let tl = gsap.timeline();
function navbarGsapAnimation() {
  let leftDktstLink = document.querySelectorAll(".dkstLink");
  let rightDktstLink = document.querySelectorAll(".dkstLink2");
  tl.from(".navbarCont", {
    x: "-150%",
    duration: 0.5,
    delay: 0.2,
  });
  leftDktstLink.forEach((ele) => {
    tl.from(ele, {
      y: 100,
      duration: 0.4,
      opacity: 0.1,
      scale: 0,
    });
  });
  tl.from(rightDktstLink, {
    y: -100,
    duration: 0.5,
  });
}
function heroText() {
  let hero_para = document.querySelector(".heroPara");
  let hero_TTL_Container = document.querySelector(".heroTtl");
  if (!hero_TTL_Container) return;

  let hero_ttl_txt = hero_TTL_Container.textContent.trim();
  let split_ttl = hero_ttl_txt.split("");
  hero_TTL_Container.textContent = "";

  split_ttl.forEach((word) => {
    let span = document.createElement("span");
    span.innerText = word;
    hero_TTL_Container.appendChild(span);
  });

  requestAnimationFrame(() => {
    let spans = document.querySelectorAll(".heroTtl span");
    if (spans.length > 0) {
      tl.from(spans, {
        x: "-150%",
        rotate: 45,
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: 0.05,
      });
      tl.from(hero_para, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
      });
    }
  });
}
function heroScrollTriggerAnim() {
  gsap.from(".hero-btm", {
    y: "100%",
    duration: 0.4,
    opacity: 0,
    scale: 0,
    ease: "linear",
    scrollTrigger: {
      trigger: ".hero-btm",
      scroller: "body",
      //   markers: true,
      start: "top 95%",
      // scrub:true
    },
  });
}
function heroCardScrollTriggerAnim() {
  gsap.utils.toArray(".hero-btm-card").forEach((card) => {
    gsap.from(card, {
      y: 200,
      duration: 0.4,
      opacity: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: card,
        scroller: "body",
        // markers: true,
        start: "top 90%", // scrub: true
      },
    });
  });
}
function heroSectionWithSection2() {
  ScrollTrigger.create({
    trigger: ".s5",
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: false, // Don't add extra space after pinning
    // markers: true,
  });
}
function section2Animations() {
  gsap.from(".s2-top", {
    y: "100%",
    opacity: 0,
    // duration:0.8,
    ease: "linear",
    // scale:0,
    scrollTrigger: {
      trigger: ".s2-top",
      scroller: "body",
      // markers:true,
      start: "top 200%",
      end: "top 80%",
      scrub: 1,
    },
  });
  gsap.from(".s2-btm", {
    y: "100%",
    opacity: 0,
    // duration:0.8,
    ease: "linear",
    // scale:0,
    scrollTrigger: {
      trigger: ".s2-btm",
      scroller: "body",
      // markers:true,
      start: "top 210%",
      end: "top 70%",
      scrub: 1,
    },
  });
}

function section4CardScrollAnime() {
  const allCards = document.querySelectorAll(".s4Card");

  allCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          scroller: "body",
        //   markers: true,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

function section5MoreAnime(){
    
}


section4CardScrollAnime();
section2Animations();
window.addEventListener("DOMContentLoaded", () => {
  heroScrollTriggerAnim();
  //   heroCardScrollTriggerAnim();
});
heroSectionWithSection2();
heroText();
navbarGsapAnimation();
navbarAnimation();
carouselFunction();
