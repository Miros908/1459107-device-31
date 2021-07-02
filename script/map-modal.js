let map = document.querySelector(".map");
let mapzoom2 = document.querySelector(".map-zoom");
map.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapzoom2.classList.remove("visualy-hidden")
})