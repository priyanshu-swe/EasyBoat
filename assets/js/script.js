// Navbar
document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-[#0e222c]");
    } else {
      navbar.classList.remove("bg-[#0e222c]");
    }
  };

  const mobileMenuButton = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (mobileMenu.classList.contains("hidden")) {
      navbar.classList.remove("bg-[#0e222c]");
    } else {
      navbar.classList.add("bg-[#0e222c]");
    }
  });
});
const targetDate = new Date("April 25, 2025 09:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    document.getElementById("countdown").innerHTML = "The launch has happened!";
  }
}

setInterval(updateCountdown, 1000);
