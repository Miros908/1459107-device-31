let slider1 = document.querySelector(".slider-1");
let slider2 = document.querySelector(".slider-2");
let slider3 = document.querySelector(".slider-3");

let slidersection2 = document.querySelector(".grid-slider-2");
let slidersection1 = document.querySelector(".grid-slider");
let slidersection3 = document.querySelector(".grid-slider-3");


slider2.addEventListener("click", function() {
    slider2.classList.add("current");
    slider3.classList.remove("current");
    slider1.classList.remove("current");

    slidersection2.classList.remove("visualy-hidden");
    slidersection1.classList.add("visualy-hidden");
    slidersection3.classList.add("visualy-hidden");
});

slider1.addEventListener("click", function() {
    slider1.classList.add("current");
    slider2.classList.remove("current");
    slider3.classList.remove("current");

    slidersection1.classList.remove("visualy-hidden");
    slidersection2.classList.add("visualy-hidden");
    slidersection3.classList.add("visualy-hidden");
});

slider3.addEventListener("click", function() {
    slider3.classList.add("current");
    slider1.classList.remove("current");
    slider2.classList.remove("current");

    slidersection3.classList.remove("visualy-hidden");
    slidersection2.classList.add("visualy-hidden");
    slidersection1.classList.add("visualy-hidden");
});