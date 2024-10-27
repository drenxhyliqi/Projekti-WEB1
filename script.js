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
    sr.reveal(".stat-item", { delay: 200 });
    sr.reveal(".start_button", { delay: 200 });
    sr.reveal(".about_porsche", { delay: 200 });
    sr.reveal(".box_4", { delay: 900 });
    sr.reveal(".about_content", { delay: 200 });
    sr.reveal(".about_btn", { delay: 500 });
    sr.reveal(".carousel-inner", { delay: 600 });
    sr.reveal(".popular_content", { delay: 500 });
    sr.reveal(".featured_content", { delay: 500 });
    sr.reveal(".box_1", { delay: 300 });
    sr.reveal(".box_2", { delay: 700 });
    sr.reveal(".box_3", { delay: 1000 });
    sr.reveal(".features", { delay: 700 });
});



// document.getElementById('playButton').addEventListener('click', function() {
//     const audio = document.getElementById('audio');
//     audio.play();
//     });