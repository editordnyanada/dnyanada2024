let currentPage = 1;
const totalPages = 10; // Set this to the total number of pages in your PDF

function updatePage() {
    document.getElementById('flipbook-img').src = `page${currentPage}.jpg`;
    document.getElementById('page-number').textContent = currentPage;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

// Initialize flipbook
updatePage();
