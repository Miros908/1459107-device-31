let serviceitem1 = document.querySelector(".link-service-1");
let serviceitem2 = document.querySelector(".link-service-2");
let serviceitem3 = document.querySelector(".link-service-3");



let deliverysection1 = document.querySelector(".delivery-section");
let deliverysection2 = document.querySelector(".delivery-section-2");
let deliverysection3 = document.querySelector(".delivery-section-3");







serviceitem1.addEventListener("click", function() {
    deliverysection1.classList.remove("visualy-hidden");
    deliverysection2.classList.add("visualy-hidden");
    deliverysection3.classList.add("visualy-hidden");
    serviceitem1.classList.add("current-service");
    serviceitem2.classList.remove("current-service");
    serviceitem3.classList.remove("current-service");


});
serviceitem2.addEventListener("click", function() {
    deliverysection2.classList.remove("visualy-hidden");
    deliverysection1.classList.add("visualy-hidden");
    deliverysection3.classList.add("visualy-hidden");
    serviceitem2.classList.add("current-service");
    serviceitem1.classList.remove("current-service");
    serviceitem3.classList.remove("current-service");


});
serviceitem3.addEventListener("click", function() {
    deliverysection3.classList.remove("visualy-hidden");
    deliverysection2.classList.add("visualy-hidden");
    deliverysection1.classList.add("visualy-hidden");
    serviceitem3.classList.add("current-service");
    serviceitem2.classList.remove("current-service");
    serviceitem1.classList.remove("current-service");



})