 // Menu toggle
 const menuIcon = document.querySelector('.menu-icon');
 const mobileMenu = document.querySelector('.mobile-menu');

 menuIcon.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
 });

 // Smooth scroll and close menu
 const menuLinks = document.querySelectorAll('.mobile-menu ul li a, .mobile-icons a');
 menuLinks.forEach(link => {
     link.addEventListener('click', function (e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         document.querySelector(targetId).scrollIntoView({
             behavior: 'smooth'
         });
         mobileMenu.classList.remove('active');
     });
 });