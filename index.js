const moreInfoButtons = document.querySelectorAll('.more-info-button');

for (const moreInfoButton of moreInfoButtons) {
  moreInfoButton.addEventListener('click', (event) => {
    const popupSection = event.currentTarget.parentElement.nextElementSibling;
    popupSection.style.display = 'block';
  });
}

const closePopupButtons = document.querySelectorAll('.close-popup-button');

for (const closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener('click', (event) => {
    const popupSection =
      event.currentTarget.parentElement.parentElement.parentElement;

    popupSection.style.display = 'none';
  });
}

// Facts about me section
const factsAboutMe = [
  'I am studying computer science and building my web development skills.',
  'I enjoy learning how websites, programs, and computer systems work.',
  'I like solving problems step by step, especially when debugging code.',
  'I have experience working with technology, communication, and organization.',
  'I am interested in building projects that show my growth as a developer.',
  'I am a retired Veteran.',
  'I currently work at Randall Childrens hospital where I engineer devices for differently able kiddos.',
  'I also prototype... A LOT.',
];

const loadFactsButton = document.querySelector('.load-personal-facts-button');
const factsList = document.getElementById('personal-facts-list');

const loadFactsAboutMe = function () {
  factsList.replaceChildren();

  for (const fact of factsAboutMe) {
    const factItem = document.createElement('p');
    factItem.setAttribute('class', 'personal-fact-list-item');
    factItem.textContent = fact;
    factsList.append(factItem);
  }

  loadFactsButton.textContent = 'Reload Facts About Me';
};

loadFactsButton.addEventListener('click', loadFactsAboutMe);
const navbarToggle = document.getElementById('navbar-toggle-trigger');
const navbarCloseButton = document.getElementById('navbar-toggle-close-button');

navbarCloseButton.addEventListener('click', () => {
  navbarToggle.checked = false;
});
