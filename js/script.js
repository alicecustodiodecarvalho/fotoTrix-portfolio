const images = document.querySelectorAll('.grid-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex;

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = 'flex';
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

nextBtn.onclick = function () {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
}

prevBtn.onclick = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

images.forEach((img, index) => {
    img.onclick = function () {
        openModal(index);
    };
});
