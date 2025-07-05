document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.banner-img');
    let actual = 0;
    setInterval(() => {
        banners[actual].classList.remove('active');
        actual = (actual + 1) % banners.length;
        banners[actual].classList.add('active');
    }, 3000);
});