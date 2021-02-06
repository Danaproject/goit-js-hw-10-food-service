const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector('body');

switcherRef.addEventListener('click', handleSwitcher);

setSavedTheme();

function handleSwitcher() {
    let newTheme = Theme.DARK;

    if (bodyRef.classList.contains(Theme.LIGHT)) {
        newTheme = Theme.DARK;
    } else if (bodyRef.classList.contains(Theme.DARK)) {
        newTheme = Theme.LIGHT;
    }
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
}

function toggleTheme(theme) {
    if (theme === Theme.LIGHT) {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
    } else if (theme === Theme.DARK) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
    }
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) bodyRef.classList.add(savedTheme); 
    if (savedTheme === Theme.DARK) switcherRef.checked = true;
}


