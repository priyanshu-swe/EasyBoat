  // Navbar
  document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 0) {
            navbar.classList.add("bg-[#0e222c]");
        } else {
            navbar.classList.remove("bg-[#0e222c]");
        };
    };

    const mobileMenuButton = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            navbar.classList.remove('bg-[#0e222c]');
        } else {
            navbar.classList.add('bg-[#0e222c]');
        }
    });
});
