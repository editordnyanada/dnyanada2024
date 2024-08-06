// Array of image URLs
const imageUrls = [
    'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_001.jpg?raw=true',
    'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_002.jpg?raw=true',
    'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_003.jpg?raw=true',
    'https://github.com/editordnyanada/dnyanada2024/blob/f710017a2e6ca7c6fe04ff78fa81965e4ff95871/images/Dnayanda2024_Page_004.jpg?raw=true'
    // Add more URLs as needed
];

let currentPage = 0;

const flipbookContainer = document.getElementById('flipbook-container');
const bookImage = document.getElementById('bookImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const currentPageElement = document.getElementById('currentPage');
const totalPagesElement = document.getElementById('totalPages');

function updateImage() {
    // Slide effect by changing the translateX value
    flipbookContainer.style.transform = `translateX(-${currentPage * 100}%)`;

    // Update the image source
    bookImage.src = imageUrls[currentPage];
    
    // Update page indicators
    currentPageElement.textContent = currentPage + 1; // Display page numbers as 1-based
    totalPagesElement.textContent = imageUrls.length;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateImage();
   
