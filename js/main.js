// scrollbar navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}
// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

let carouselInner = document.getElementsByClassName("carousel-inner");


let nextBtn = document.getElementsByClassName("carousel-control-next");
let backBtn = document.getElementsByClassName("carousel-control-prev");

carouselInner.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    carouselInner.scrollLeft += evt.deltaY;
})

backBtn.addEventListener("click", () => {
    carouselInner.style.scrollBehavior = "smooth";
    carouselInner.scrollLeft -= 900;
});
nextBtn.addEventListener("click", () => {
    carouselInner.style.scrollBehavior = "smooth";
    carouselInner.scrollLeft += 900;
});



