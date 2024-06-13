document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #2a5298, #1D1B56)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #1D1B56, #2a5298)';
        }
    });
});
