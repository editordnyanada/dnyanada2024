document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_001.jpg?raw=true',
        'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_002.jpg?raw=true',
        'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_003.jpg?raw=true',
        // Add more image URLs as needed
    ];

    const flipbook = document.getElementById('flipbook');

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'page';
        img.alt = `Page ${index + 1}`;
        if (index === 0) img.style.display = 'block'; // Show the first image initially
        flipbook.appendChild(img);
    });

    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            pages[currentPage].style.display = 'none';
            currentPage--;
            pages[currentPage].style.display = 'block';
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.display = 'none';
            currentPage++;
            pages[currentPage].style.display = 'block';
        }
    });

    // Zoom functionality
    let scale = 1;
    const zoomStep = 0.1;
    const minScale = 0.5;
    const maxScale = 3;

    flipbook.addEventListener('wheel', (event) => {
        if (event.deltaY < 0) {
            // Zoom in
            scale = Math.min(scale + zoomStep, maxScale);
        } else {
            // Zoom out
            scale = Math.max(scale - zoomStep, minScale);
        }
        pages[currentPage].style.transform = `scale(${scale})`;
        event.preventDefault();
    });
});
