import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");


    const galleryMarkup = galleryItems.map(({original, preview, description}) => 
    `
        <div class ="gallery__item">
                <a class="gallery__link" href="${original}">
               <img class="gallery__image" 
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
                </a>
                </div>
        `).join("");
    
        gallery.insertAdjacentHTML("beforeend", galleryMarkup)
console.log(galleryMarkup)

let instance = "";
 gallery.addEventListener("click", onImageClick)
function onImageClick(event) {
    event.preventDefault();
if (event.target.nodeName !== "IMG") { 
    return };
instance = basicLightbox.create(
     `<img src=${event.target.dataset.source}>`
    );
instance.show();
document.addEventListener('keydown', onModalCloseToEscape); 
    }
    function onModalCloseToEscape (evt) {
        if (evt.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape)
} 
    }
