function coolScrollCreate() {
    $("a.scroll-to").on("click", (e) => {
        e.preventDefault();
        coolScroll($(e.target).attr('href'))
    })
}

function coolScroll(anchor) {
    let elem = anchor === "#" ? 0 : $(anchor).offset().top;
    $('html, body').stop().animate({
        scrollTop: elem - ($('header').height() < window.innerHeight ? $('header').height() : 5) - 10
    }, 100);
}


const scrollToTopBtn = $("button.scroll-to-top");
scrollToTopBtn.on("click", () => coolScroll("#"));

function magic() {
    if (window.pageYOffset > 100) {
    scrollToTopBtn.css("opacity", 1);
    } else scrollToTopBtn.css("opacity", 0);
}

window.onscroll = magic;