import { galleryItems } from './gallery-items.js';

// Change code below this line
const items = galleryItems

const galleryContainer = document.querySelector('.gallery')

const markup = galleryItems
  .map(
    (el, index) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      data-index="${index}"
      alt="${el.description}"
    />
  </a>
</div>`,
  )
  .join('');
galleryContainer.innerHTML = markup;

    
const modalOpen = (e) => {
    e.preventDefault()

const instance = basicLightbox.create(`
    <img alt = "${e.target.dataset.description}" src="${e.target.dataset.source}">
`)

instance.show()
}

galleryContainer.addEventListener('click', modalOpen)