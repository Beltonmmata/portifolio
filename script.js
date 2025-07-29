document.addEventListener("DOMContentLoaded", () => {
  // === Typewriter Effect ===
  const textArray = [
    "Software Engineer",
    "Full-Stack Web Developer",
    "MERN Stack Enthusiast",
    "Automation & Python Dev",
  ];
  let textIndex = 0,
    charIndex = 0,
    isDeleting = false;
  const changingText = document.querySelector(".changing-text");

  function typeEffect() {
    const current = textArray[textIndex];
    const display = current.substring(0, charIndex);
    changingText.textContent = display;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 1000);
    }
  }
  if (changingText) typeEffect();

  // === Smooth Scroll ===
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.getElementById(href.substring(1));
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        }
      }
    });
  });

  // === Tabs in About Section ===
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });

  // === Contact Form Submit ===
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! Your message has been sent successfully.");
      contactForm.reset();
    });
  }

  // === Scroll Fade-In Observer ===
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  fadeElements.forEach((el) => observer.observe(el));

  // === Scroll-to-Top Button ===
  const scrollBtn = document.createElement("div");
  scrollBtn.className = "scroll-to-top";
  scrollBtn.innerHTML = "^";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // === Hamburger Menu Toggle ===
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // === Nav Active Link ===
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach((link) =>
    link.addEventListener("click", () => {
      navItems.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
      navLinks?.classList.remove("show");
    })
  );

  // === Dark Mode Toggle with Ionicons ===
  const darkToggle = document.getElementById("dark-mode-toggle");
  const icon = darkToggle?.querySelector("ion-icon");

  if (darkToggle && icon) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      icon.setAttribute(
        "name",
        document.body.classList.contains("dark") ? "sunny" : "moon"
      );
      icon.classList.add("spin");
      setTimeout(() => icon.classList.remove("spin"), 1000); // remove spin after 1s
    });
  }
});

// FAQ Toggle Logic
document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    item.classList.toggle("open");
  });
});

// Contact Form Feedback
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I'll respond shortly.");
  e.target.reset();
});
