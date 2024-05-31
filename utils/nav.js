export const changeStateNav = () => {
    const nav = document.getElementById('nav');
    const btnNav = document.getElementById('btn-nav');
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btnNav.classList.remove('open');
    } else {
        nav.classList.add('open');
        btnNav.classList.add('open');
    }
};
