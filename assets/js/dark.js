let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark');

const enableDarkMode = () => {
  document.body.classList.add('dark-theme');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-theme');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
};
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
