const pages = document.querySelectorAll('.page');
const turnPageButtons = document.querySelectorAll('.turn-page-button');
const backButtons = document.querySelectorAll('.back-button');
let currentPage = 0;

pages[currentPage].classList.add('active'); // backup -- also set in html

function cyclePages(direction) {
  pages[currentPage].classList.remove('active');
  currentPage = (currentPage + direction + pages.length) % pages.length;
  pages[currentPage].classList.add('active');
}

turnPageButtons.forEach(button => button.addEventListener('click', () => cyclePages(1)));
backButtons.forEach(button => button.addEventListener('click', () => cyclePages(-1)));



// Lightbox overlay 
const openLightboxButton = document.querySelector('#open-lightbox-button');

openLightboxButton.addEventListener('click', () => {
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.classList.add('lightbox-overlay');

  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <p>Hello, I am a dynamically generated lightbox!</p>
    <button id="close-lightbox-button">Close</button>
  `;

  const closeLightboxButton = lightbox.querySelector('#close-lightbox-button');
  closeLightboxButton.addEventListener('click', () => {
    lightboxOverlay.style.display = 'none';
  });

  lightboxOverlay.addEventListener('click', (event) => {
    if (event.target === lightboxOverlay) {
      lightboxOverlay.style.display = 'none';
    }
  });

  lightboxOverlay.appendChild(lightbox);
  document.body.appendChild(lightboxOverlay);
  lightboxOverlay.style.display = 'block';
});