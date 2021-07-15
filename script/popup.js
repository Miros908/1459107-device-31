let buttonwrite = document.querySelector(".write");
let popup = document.querySelector(".modal");
let buttonclose = document.querySelector(".button-close");
let buttonclose2 = document.querySelector(".button-close-2");
let mapzoom = document.querySelector(".map-zoom");
let forme = document.querySelector(".appointment-form ");
let email = document.querySelector(".email-form");
let names = document.querySelector(".name-form");


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


forme.addEventListener("submit", function(evt) {
    if (!names.value || !email.value) {
        evt.preventDefault();

        popup.classList.remove("bounce");
        popup.classList.add("error");

    }


});