document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_001.jpg?raw=true",
        "https://raw.githubusercontent.com/editordnyanada/dnyanada2024/main/images/Dnayanda2024_Page_002.jpg"
    ];

    const flipbook = document.getElementById('flipbook');

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'page';
        img.alt = `Page ${index + 1}`;
        flipbook.appendChild(img);

        page.addEventListener('click', () => {
            page.classList.toggle('flipped');
        });
    });
});
