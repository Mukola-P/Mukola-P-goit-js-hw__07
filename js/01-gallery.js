import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery")
console.log(galleryRef);

createGalleryMarkup(galleryItems);
galleryRef.addEventListener("click", onImageClick);
function onImageClick(e) {
    e.preventDefault()
    if (e.target.nodeName !== "IMG") {
        return
    }

    const originImgUrl = e.target.dataset.source
    instance.element().querySelector("img").src = originImgUrl
    instance.show()
}

const instance = basicLightbox.create(`<img src="">`, {
    onShow: () => window.addEventListener("keydown", onEscKeydown),
    onClose: ()=>window.removeEventListener("keydown", onEscKeydown)
})

