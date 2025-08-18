import { artData } from './data.js';
console.log(artData.name)

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const main = document.querySelector('main');
const closeBtn = document.getElementById('close-btn');


// Image links for full-size images
const fullSizeImages = {
    'fallair': 'images/fallair.jpg',
    'greenlands': 'images/greenlands.jpg',
    'saltlake': 'images/saltlake.jpg',
    'bluedays': 'images/bluedays.jpg',
    'stormatdusk': 'images/stormatdusk.jpg',
    'bluedaycomp2': 'images/bluedaycomp2.jpg',
    'peacelake': 'images/peacelake.jpg',
    'evening': 'images/evening.jpg',
    'greenlandscomp2': 'images/greenlandscomp2.jpg',
    'windyday': 'images/windyday.jpg'

};

let html = ``
artData.forEach((item) => {
    html += `
     <a href="#" class="image-card gallery-item">
        <article>
            <img src=${item.src} alt=${item.alt}>
                <div class="article-text">
                    <h2>${item.title}</h2>
                    <p>${item.medium}</p>
                </div>
        </article>
    </a>
    `

})
main.innerHTML = html

const galleryItemArr = document.querySelectorAll('.gallery-item');

galleryItemArr.forEach(item => {
    item.addEventListener('click', (e) => {
        const altText = e.target.alt.toLowerCase();
        lightbox.style.display = 'flex'; // Show lightbox
        lightboxImage.src = fullSizeImages[altText]; // Set full-size image source
    });
});

// Close the lightbox when clicking the close button or outside the image
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide lightbox
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Hide lightbox if clicking outside the image
    }
});