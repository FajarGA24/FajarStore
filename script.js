let index = 1;
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slides img");
const totalSlides = slideItems.length;

// Duplikat slide pertama di akhir
slides.appendChild(slideItems[0].cloneNode(true));

function nextSlide() {
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;
    
    index++;

    if (index === totalSlides) {
        setTimeout(() => {
            slides.style.transition = "none"; // Matikan animasi sementara
            slides.style.transform = "translateX(1%)"; // Langsung kembali ke awal
            index = 1;
        }, 1);
    }
}

function searchProduct() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block"; // Tampilkan produk yang cocok
        } else {
            product.style.display = "none"; // Sembunyikan yang tidak cocok
        }
    });
}
setInterval(nextSlide, 3000); // Geser setiap 3 detik