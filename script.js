// Mobile Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Form validation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Enter a valid email!");
    return false;
  }

  alert("Message sent successfully!");
  document.getElementById("contactForm").reset();
  return true;
}

// Reveal animations on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".animate-up").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
