import gallery from './gallery-Items.js';
import refs from './refs.js';
const { galleryImgs, modal, modalImg, closeModalBtn, modalOverlay } = refs;


const gallerysMarkup = getMarkup(gallery)
galleryImgs.insertAdjacentHTML('beforeend', gallerysMarkup);

function getMarkup(gallery) {
  return gallery.map(({ preview, original, description })=>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> 
      </a>
    </li>`,
).join('');
}

galleryImgs.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault()
 if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  modal.classList.add("is-open");
  modalImg.src = e.target.dataset.source
  modalImg.alt = e.target.alt
}

modalOverlay.addEventListener("click", modalClose);
closeModalBtn.addEventListener("click", modalClose);
function modalClose() {
  modal.classList.remove("is-open");
}
 

window.addEventListener('keydown', onEscKeyPress)

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    modal.classList.remove("is-open");
  }
}

function clearSrcAlt(src = "", alt = "") {
  modalImg.src = src;
  modalImg.alt = alt;
}
clearSrcAlt();
