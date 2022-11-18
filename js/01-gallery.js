import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImageCardsMarkup(galleries) {
  return galleries
    .map(({ preview, original, description }) => {
      return `  
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
             <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div> `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const imageSrcValue = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <div class="modal">
        <img src="${imageSrcValue}" >
    </div>
    `,
    {
      onClose: () => {
        window.removeEventListener("keydown", onEspCloseModal);
      },
    }
  );

  instance.show();

  window.addEventListener("keydown", onEspCloseModal);
  //   window.addEventListener('click', onClickCloseModal);

  function onEspCloseModal(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
  //   function onClickCloseModal(e) {
  //     if (event.target.classList !== 'gallery__image') {
  //       console.log('sdfg');
  //       instance.close();
  //     }
  //   }
}
