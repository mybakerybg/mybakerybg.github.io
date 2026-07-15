// Data
const videosData = [
  {
    title: 'Долината на лимеца',
    date: '',
    url: 'https://www.einkornvalley.com/'
  },
  {
    title: 'Евамел',
    date: '',
    url: 'https://evamel.com/'
  },
  {
    title: 'Go Guide',
    date: '',
    url: 'https://goguide.bg/'
  },
  {
    title: 'City Guide: Две локации извън центъра, заради които си струва да хванеш трамвая',
    date: '',
    url: 'https://goguide.bg/53212-city-guide-dve-lokatsii-izvun-tsentara-zaradi-koito-si-struva-da-hvanesh-tramvaya/',
    emoji: '🔗'
  },
];


// HTML Templates
const videoTemplate = (data) => html`
    <div id="video-page">
        <h2>Партньори</h2>
        ${data.length === 0 ? noItemsTemplate() : data.map(el => cardTemplate(el))}
    </div>
`;

const cardTemplate = (data) => html`
    <article>
        <h4>${data.emoji || ''} <a href="${data.url}" target="_blank">${data.title}</a></h4>
    </article>
`;

const noItemsTemplate = () => html`
    <h3 class="title no-posts-title">Страницата все още няма налично съдържание ...</h3>
`;

// Refs
const root = document.querySelector('.page-main');

// Execution
showVideoPage(root);

// Functions
function showVideoPage(ctxInput) {
  render(html`<p class="loader">... Данните се зареждат ...</p>`, ctxInput);

  render(videoTemplate(videosData), ctxInput);
}


// IMPORTS
import { html, render } from '../GLOBAL/js-global/lib.js';
