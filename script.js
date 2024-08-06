document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'https://github.com/your-username/your-repo/raw/main/images/image1.jpg',
        'https://github.com/your-username/your-repo/raw/main/images/image2.jpg',
        // Add more image URLs
    ];

    const flipbook = document.getElementById('flipbook');

    images.forEach((src, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.backgroundImage = `url(${src})`;
        page.style.zIndex = images.length - index;
        flipbook.appendChild(page);

        page.addEventListener('click', () => {
            page.classList.toggle('flipped');
        });
    });
});
