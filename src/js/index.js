import '../css/style.css';


const drivers = [
  'Alfa Romeo',
  'Williams',
  'Red Bull',
  'Mercedes',
  'AlphaTauri',
  'Alpine',
  'McLaren',
  'Haas',
  'Ferrari',
  'Aston Martin'
]


const buttonEl = document.querySelector('.start-button');
const winnerEl = document.querySelector('.winner');
// const resultsEl = document.querySelector('.results');

buttonEl.addEventListener('click', () => {
  const allTeams = drivers.map(startRace);

  Promise.race(allTeams).then(({ teamName, time }) =>
    winnerEl.textContent = `${teamName} finished in ${time}`);

  winnerEl.textContent = '';
})



function startRace(teamName) {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);

    setTimeout(() => {
      resolve({teamName, time});
    }, time)
  })
}
