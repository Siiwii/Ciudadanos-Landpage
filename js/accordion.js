
document.addEventListener("DOMContentLoaded", function () {
    var actions = document.querySelectorAll(".action");
    actions.forEach(function (action) {
        action.addEventListener("click", function (e) {
            e.preventDefault();

            let slides = document.querySelectorAll(".objetivos__slide-content");
            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            let slide = this.closest(".objetivos__slide");
            let slideContent = slide.querySelector(".objetivos__slide-content");
            slideContent.classList.add("active");
        });
    });
});
