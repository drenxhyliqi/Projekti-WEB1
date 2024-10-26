document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const offcanvas = document.getElementById('offcanvasExample');

    function applyBlurEffect() {
        if (!offcanvas.classList.contains('show') && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', applyBlurEffect);

    offcanvas.addEventListener('show.bs.offcanvas', function() {
        navbar.classList.remove('scrolled');
    });

    offcanvas.addEventListener('hide.bs.offcanvas', function() {
        applyBlurEffect(); 
    });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
  });
    sr.reveal(".navbar", { delay: 400 });
    sr.reveal(".porsche_txt", { delay: 300 });
    sr.reveal(".electricp", { delay: 200 });
    sr.reveal(".main_img", { delay: 100 });
});