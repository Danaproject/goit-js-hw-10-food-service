const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body');

switcherRef.addEventListener('change', handleSwitcher);

setSavedTheme();

function handleSwitcher() {
    if (bodyRef.classList.contains(Theme.LIGHT)) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else if (bodyRef.classList.contains(Theme.DARK)) {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    } else { 
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    }
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) bodyRef.classList.add(savedTheme); 
    if (savedTheme === Theme.DARK) switcherRef.checked = true;
}