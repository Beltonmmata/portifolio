document.addEventListener("DOMContentLoaded", () => {
  // Auto-changing text in the hero section
  const changingText = document.querySelector(".changing-text");
  const textArray = [
    "Full Stack Developer",
    "Software Engineer",
    "JavaScript Expert",
    "MERN Stack Developer",
    "Tech Enthusiast",
  ];
  let textIndex = 0;

  function changeText() {
    changingText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
  }
  setInterval(changeText, 3000);

  // Tabs in About Me section
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      button.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });

  // Contact Form Submission (Dummy Functionality)
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Your message has been sent successfully! I'll get back to you soon."
    );
    document.querySelector("form").reset();
  });

  // Animate elements on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
});
