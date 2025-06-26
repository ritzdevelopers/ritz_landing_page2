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

function dekstopNavbarController() {
  let lastScrollY = window.scrollY;
  const navBar = document.querySelector(".dkstpNav");

  if (!navBar) {
    console.warn("No element found with class .dkstpNav");
    return;
  }

  window.addEventListener("scroll", () => {
    console.log("Scrolling...", window.scrollY);

    if (window.scrollY > lastScrollY) {
      // Scroll Down -> hide navbar
      navBar.style.top = "-100%";
    } else {
      // Scroll Up -> show navbar
      navBar.style.top = "33px";
    }

    lastScrollY = window.scrollY; 
  });
}

// Run the function after DOM is loaded
window.addEventListener("DOMContentLoaded", dekstopNavbarController);

dekstopNavbarController();
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
      gsap.from(spans, {
        x: "-150%",
        rotate: 45,
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: 0.05,
      });
      gsap.from(hero_para, {
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
    y: "20%",
    opacity: 0,
    // duration:0.8,
    ease: "linear",
    // scale:0,
    scrollTrigger: {
      trigger: ".s2-btm",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 80%",
      scrub: 2,
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
function section5MoreAnime() {
  let allH1 = document.querySelectorAll(".s5TxtCont h1");
  let allH2 = document.querySelectorAll(".s5TxtCont h2");
  let allPara = document.querySelectorAll(".s5TxtCont p");

  gsap.utils.toArray(allH2).forEach((h1Tag) => {
    gsap.to(h1Tag, {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: h1Tag,
        scroller: "body",
        markers: true,
        start: "top 60%",
        // end:"top 30%"
      },
    });
  });
}
function section3Animations() {
  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", () => {
    const s3ttl_cont = document.querySelector(".s3Ttl");

    if (!s3ttl_cont) {
      console.warn("Element with class .s3Ttl not found");
      return;
    }

    const text = s3ttl_cont.textContent.trim();
    s3ttl_cont.textContent = "";

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      s3ttl_cont.appendChild(span);
    });

    gsap.from(".s3Ttl span", {
      y: -250,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      stagger: 0.03,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".s3Ttl",
        scroller: "body",
        start: "top 70%",
        end: "top 35%",
        toggleActions: "play none none none",
        // markers: true,
        scrub: 1,
      },
    });
  });
}

function section3CardAnimations() {
  document.querySelectorAll(".s3CardT").forEach((card) => {
    const bg = card.querySelector(".bgColors3Card");
    const img = card.querySelector(".s3CardImg");
    const title = card.querySelector(".s3CardTitle");
    const arrow = card.querySelector(".arrDv1");

    card.addEventListener("mouseenter", () => {
      gsap.to(bg, {
        y: "100%",
        x: "-100%",
        opacity: 1,
        scale: 1,
        borderLeftRadius: "10%",
        duration: 0.5,
      });
      gsap.to(img, {
        y: "-10%",
      });
      gsap.to(title, {
        y: "100%",
        color: "black",
      });
      gsap.to(arrow, {
        x: "-140%",
        y: "50%",
        ease: "power2",
        scale: 1,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(bg, {
        y: "-100%",
        x: "100%",
        opacity: 0,
        scale: 0,
        borderLeftRadius: "10%",
        duration: 0.8,
      });
      gsap.to(img, {
        y: "-4%",
      });
      gsap.to(title, {
        y: "-10%",
        color: "black",
      });
      gsap.to(arrow, {
        x: "100%",
        y: "-50%",
        scale: 0,
      });
    });
  });
}

section3CardAnimations();
section3Animations();
section4CardScrollAnime();
section2Animations();
window.addEventListener("DOMContentLoaded", () => {
  heroScrollTriggerAnim();
});
heroSectionWithSection2();
heroText();
navbarGsapAnimation();
navbarAnimation();
carouselFunction();

function contactUsModal() {
  const modal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const contactBtns = document.querySelectorAll(".contact-now");

  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }, 8000);

  contactBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });
}
contactUsModal();

function enquiryFormSubmit() {
  let url =
    "https://script.google.com/macros/s/AKfycbz9nZZUrKNdnH63kpaqXAfh6Xjl96Q7IpFVD--92LdkvbbwwfF2VkuSFQAGeoJDLLVZ/exec";
  let form = document.querySelector("#form");
  let form2 = document.querySelector("#form2");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.enBtn.innerHTML = "Submitting";
    let enquiryData = new FormData(form);
    fetch(url, {
      method: "POST",
      body: enquiryData,
    })
      .then((res) => res.text())
      .then((finalRes) => {
        e.target.enBtn.innerHTML = "Submit";
        alert("Enquiry Submit Successfully!");
        console.log("====================================");
        console.log(finalRes);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log("Form Err ", err);
        alert("Server Error, Please Try Again.");
        console.log("====================================");
      });
  });

  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.enBtn.innerHTML = "Submitting";
    let enquiryData = new FormData(form);
    fetch(url, {
      method: "POST",
      body: enquiryData,
    })
      .then((res) => res.text())
      .then((finalRes) => {
        e.target.enBtn.innerHTML = "Submit";
        alert("Enquiry Submit Successfully!");
        console.log("====================================");
        console.log(finalRes);
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log("Form Err ", err);
        alert("Server Error, Please Try Again.");
        console.log("====================================");
      });
  });
}
enquiryFormSubmit();
