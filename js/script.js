// DOM Elements
const header = document.querySelector('#header');
const headerToggle = document.querySelector('#header-toggle');

// DOM Events
const onHeaderToggleClicked = () => {
  const { classList } = header;
  if (classList.contains('toggled')) {
    classList.remove('toggled');
  } else {
    classList.add('toggled');
  }
}

// On Window Load
window.onload = () => {
  headerToggle.addEventListener('click', onHeaderToggleClicked);
};
