function linksCreate() {
    const links = [];
    const main = document.querySelector("main");
    [...main.querySelectorAll('h1')].forEach((el, i) => {
        el.id = `h1-${i}`;
        links.push(`<li><a href="#h1-${i}" class="nav__link scroll-to">${el.textContent}</a></li>`);
    });

    const nav = document.querySelector(".nav__links");
    nav.innerHTML = links.join('');
    coolScrollCreate();
}