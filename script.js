const imageFolderUrl = 'https://github.com/editordnyanada/dnyanada2024/blob/64a1e2f426e442a173df3a61527548a2e1dc976d/images';
const totalPages = 344;
let currentPage = 1;

const bookImage = document.getElementById('bookImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    bookImage.src = `${imageFolderUrl}page${currentPage}.jpg`;
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
