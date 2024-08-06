const imageFolderUrl = 'https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPOSITORY/main/images/';
const totalPages = 344;
let currentPage = 1;

const bookImage = document.getElementById('bookImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    const pageNumber = String(currentPage).padStart(3, '0');
    bookImage.src = `${imageFolderUrl}Dnayanda2024_Page_${pageNumber}.jpg`;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateImage();
    }
});

// Initialize with the first page
updateImage();
