import '../css/style.css';
import imageTpl from '../templates/images.hbs';



const imageContainerEl = document.querySelector('.images-list');
const buttonEl = document.querySelector('.start-button');
buttonEl.addEventListener('click', fetchImages)

function fetchImages() {
  fetch('https://pixabay.com/api/?key=29734383-6ec437d7a0c5df52cef54a0f9&q=tree&image_type=photo&per_page=10')
    .then(r => r.json())
    .then(r => {
      renderImage(r.hits)
    })
    .catch(error => console.log(error));
}

function renderImage(image) {
  const markup = imageTpl(image);
  imageContainerEl.innerHTML = markup;
}


// const drivers = [
//   'Alfa Romeo',
//   'Williams',
//   'Red Bull',
//   'Mercedes',
//   'AlphaTauri',
//   'Alpine',
//   'McLaren',
//   'Haas',
//   'Ferrari',
//   'Aston Martin'
// ]


// const buttonEl = document.querySelector('.start-button');
// const winnerEl = document.querySelector('.winner');
// // const resultsEl = document.querySelector('.results');

// buttonEl.addEventListener('click', () => {
//   const allTeams = drivers.map(startRace);

//   Promise.race(allTeams).then(({ teamName, time }) =>
//     winnerEl.textContent = `${teamName} finished in ${time}`);

//   winnerEl.textContent = '';
// })



// function startRace(teamName) {
//   return new Promise((resolve) => {
//     const time = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);

//     setTimeout(() => {
//       resolve({teamName, time});
//     }, time)
//   })
// }


