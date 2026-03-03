const divContent = document.querySelector("#divContent");
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const btnHideShow = document.querySelector("#btn-hideShow");
btnShow.addEventListener("click", () => {
    divContent.classList.add("show");
    divContent.classList.remove("hide");
});
btnHide.addEventListener("dblclick", () => {
    divContent.classList.add("hide");
    divContent.classList.remove("show");
})
btnHideShow.addEventListener("click", () => {
    divContent.classList.toggle("hide");
})