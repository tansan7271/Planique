/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const forceShadow = navbar.classList.contains("force-shadow");

    if (forceShadow) {
        navbar.classList.add("scrolled");
        return; // 감시 안 함
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
        navbar.classList.remove("scrolled");
        } else {
        navbar.classList.add("scrolled");
        }
    });
});