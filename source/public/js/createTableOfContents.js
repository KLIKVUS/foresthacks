window.onload = linksCreate;

function linksCreate() {
    const links = [];
    [...document.querySelectorAll('h1')].forEach((el, i) => {
    el.id = `h1-${i}`;
    links.push(`<li><a href="#h1-${i}" class="nav__link scroll-to">${el.textContent}</a></li>`);
    });

    const nav = document.querySelector("nav");
    nav.firstElementChild.innerHTML = links.join('');
}