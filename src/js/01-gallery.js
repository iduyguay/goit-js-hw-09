import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202825_1280.jpg',
    description: 'Hokkaido Flower Festival',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Light Showcase',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
