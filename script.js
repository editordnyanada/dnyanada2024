document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_001.jpg?raw=true',
        'https://raw.githubusercontent.com/editordnyanada/dnyanada2024/main/images/Dnayanda2024_Page_002.jpg'
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
