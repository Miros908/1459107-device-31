let buttonwrite = document.querySelector(".write");
let popup = document.querySelector(".modal");
let buttonclose = document.querySelector(".button-close");
let buttonclose2 = document.querySelector(".button-close-2");
let mapzoom = document.querySelector(".map-zoom");


buttonwrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("visualy-hidden");
    popup.classList.add("bounce");

});




buttonclose.addEventListener("click", function() {
    popup.classList.add("visualy-hidden");
    popup.classList.remove("bounce")
});

buttonclose2.addEventListener("click", function() {
    mapzoom.classList.add("visualy-hidden");

});