// Menu button code

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.sections-navbar');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

const projects = {

  artist1: {
    id: 1,
    name: 'Shaista',
    image: 'imgs-capstone/shaista.jpg',
    intro: 'CEO of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },

  artist2: {
    id: 2,
    name: 'Brain',
    image: 'imgs-capstone/img8.jpg',
    intro: 'Member of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },

  artist3: {
    id: 3,
    name: 'Malia',
    image: 'imgs-capstone/adela.jpg',
    intro: 'Member of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },

  artist4: {
    id: 4,
    name: 'Adela',
    image: 'imgs-capstone/img7.jpg',
    intro: 'Member of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },

  artist5: {
    id: 5,
    name: 'Nurian',
    image: 'imgs-capstone/img5.jpg',
    intro: 'Member of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },

  artist6: {
    id: 6,
    name: 'Lila',
    image: 'imgs-capstone/img8.jpg',
    intro: 'Member of Dream Soar.',
    info: 'Have more than 4 yeasrs of experience in avaition industry',
  },
};

// Artist section code

const artistSection = document.querySelector('.featured-artists');

const artistTitle = document.createElement('h1');
artistTitle.className = 'artist-title';
artistTitle.textContent = 'Featured artists';
artistSection.appendChild(artistTitle);

const redLine = document.createElement('span');
redLine.className = 'span-red';
artistSection.appendChild(redLine);

const artistsMainBox = document.createElement('div');
artistsMainBox.className = 'artists-main-box';
artistSection.appendChild(artistsMainBox);

Object.values(projects).forEach((values) => {
  const artistBox = document.createElement('div');
  artistBox.className = `artist-box ${values.name.toLowerCase().replace(' ', '-')}`;
  artistBox.innerHTML = `
  <img class="artist-img" src=${values.image} alt="artist image">
  <div class="artist-info-box">
    <h1 class="artist-subtitle">${values.name}</h1>
    <h2 class="artist-intro">${values.intro}</h2>
    <p class="artist-info">${values.info}</p>
  </div>
  `;
  artistsMainBox.appendChild(artistBox);
});

const moreBtn = document.createElement('button');
moreBtn.className = 'more-btn';
moreBtn.innerHTML = `
MORE<img class="expand-icon" src="./imgs-capstone/expand-btn.png">
`;
artistSection.appendChild(moreBtn);

const lessBtn = document.createElement('button');
lessBtn.className = 'less-btn';
lessBtn.innerHTML = `
LESS<img class="expand-icon" src="./imgs-capstone/contract-btn.png">
`;
lessBtn.style.display = 'none';
artistSection.appendChild(lessBtn);

const future = document.querySelector('.malia');
const lilUzi = document.querySelector('.adela');
const kodakBlack = document.querySelector('.nurian');
const lilWayne = document.querySelector('.lila');

moreBtn.addEventListener('click', () => {
  future.style.display = 'flex';
  lilUzi.style.display = 'flex';
  kodakBlack.style.display = 'flex';
  lilWayne.style.display = 'flex';
  lessBtn.style.display = 'flex';
  moreBtn.style.display = 'none';
});

lessBtn.addEventListener('click', () => {
  future.style.display = 'none';
  lilUzi.style.display = 'none';
  kodakBlack.style.display = 'none';
  lilWayne.style.display = 'none';
  lessBtn.style.display = 'none';
  moreBtn.style.display = 'flex';
});