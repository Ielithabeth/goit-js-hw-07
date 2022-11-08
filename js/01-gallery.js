import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imagesLinks = document.querySelectorAll("a.gallery__link");

const addImages = galleryItems.map(image =>
    `<div class = "gallery__item"><a class="gallery__link" href="${image.original}"><img class = "gallery__image" loading="lazy" src = "${image.preview}" data-source = "${image.original}" alt = "${image.description}" width = "200"></a></div>`).join(" ");

gallery.insertAdjacentHTML('afterbegin', addImages);

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
});

let gallwryLightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captioinDelay: 250,
});
