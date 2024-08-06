document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'https://raw.githubusercontent.com/editordnyanada/dnyanada2024/main/images/Dnayanda%202024_Page_001.jpg',
        'https://raw.githubusercontent.com/editordnyanada/dnyanada2024/main/images/Dnayanda%202024_Page_002.jpg'
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
