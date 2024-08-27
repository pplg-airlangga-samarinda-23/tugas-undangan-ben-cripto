document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const images = carousel.querySelectorAll('img');
    const prevBTN = document.querySelector('.prev');
    const nextBTN = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images[currentIndex].classList.remove('active');
        images[index].classList.add('active');
        currentIndex = index;
    }

    prevBTN.addEventListener('click', function () {
        let index = currentIndex - 1;
        if (index < 0) index = images.length - 1;
        showImage(index);
    });

    nextBTN.addEventListener('click', function () {
        let index = currentIndex + 1;
        if (index >= images.length) index = 0;
        showImage(index);
    });

    function startAutoSlide() {
        setInterval(() => {
            let index = currentIndex + 1;
            if (index >= images.length) index = 0;
            showImage(index);
        }, 3000);
    }

    startAutoSlide();
});