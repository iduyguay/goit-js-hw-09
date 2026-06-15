import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202825_1280.jpg",description:"Hokkaido Flower Festival"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Light Showcase"}],r=document.querySelector(".gallery"),l=e.map(({preview:a,original:i,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${a}" alt="${o}" />
      </a>
    </li>`).join("");r.innerHTML=l;new t(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=01-gallery.js.map
