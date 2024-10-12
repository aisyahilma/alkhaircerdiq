// Toggle untuk menu burger
document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  burgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });
});

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }

      // Tutup menu burger setelah klik
      if (mobileMenu.classList.contains('hidden') === false) {
          mobileMenu.classList.add('hidden');
      }
  });
});

// Menambahkan efek scroll pada navbar saat menggulir halaman
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('bg-red-700');
  } else {
      header.classList.remove('bg-red-700');
  }
});
