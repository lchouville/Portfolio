// utils/theme.js

export const isDarkMode = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

export const applyTheme = () => {
  if (typeof window !== 'undefined') { // Ensure execution only on client-side
    const isDark = isDarkMode();
    const body = document.body;

    if (isDark) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      document.querySelectorAll('.theme-sensitive').forEach((element) => {
        element.classList.add('dark');
        element.classList.remove('light');
      });
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      document.querySelectorAll('.theme-sensitive').forEach((element) => {
        element.classList.add('light');
        element.classList.remove('dark');
      });
    }
  }
};

export const listenForThemeChanges = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', () => {
      applyTheme();
    });
  }
};
