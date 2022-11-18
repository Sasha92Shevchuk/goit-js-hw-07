import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createImageCardsMarkup(galleries) {
  return galleries
    .map(({ preview, original, description }) => {
      return `  
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> `;
    })
    .join("");
}
