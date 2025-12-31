particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: { enable: true, speed: 1 }
  }
});













// Active Navbar Link on Scroll
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});





// ================= EMAILJS =================
// ================= EMAILJS =================
(function () {
  emailjs.init("35xaiD2mPLXP7qXST"); // ✅ YOUR PUBLIC KEY
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_1wvh49k",     // ✅ Service ID
    "template_jsfgx9l",    // ✅ Template ID
    this
  ).then(
    () => {
      alert("Message sent successfully 🚀");
      contactForm.reset();
    },
    (error) => {
      alert("Failed to send message ❌");
      console.log(error);
    }
  );
});
