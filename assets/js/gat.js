 // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Initialize animations when elements come into view
        document.addEventListener('DOMContentLoaded', function() {
            // You can add Intersection Observer here for more advanced animations
            // when elements scroll into view
        });