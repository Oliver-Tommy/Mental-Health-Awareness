document.addEventListener('DOMContentLoaded', function () {
    const parallaxBg = document.querySelector('.parallax-bg');
    let scrollPosition = 0;

    window.addEventListener('scroll', function () {
        scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});