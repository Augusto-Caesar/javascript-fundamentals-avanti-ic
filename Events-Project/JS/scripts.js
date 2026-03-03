const divContent = document.querySelector("#divContent");
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const btnHideShow = document.querySelector("#btn-hideShow");

const inputForm = document.querySelector("#get");
const btnGet = document.querySelector("#btn-get");
const divResult = document.querySelector("#divResult");

btnShow.addEventListener("click", () => {
    divContent.classList.add("show");
    divContent.classList.remove("hide");
});
btnHide.addEventListener("dblclick", () => {
    divContent.classList.add("hide");
    divContent.classList.remove("show");
});
btnHideShow.addEventListener("click", () => {
    divContent.classList.toggle("hide");
});

inputForm.addEventListener("keydown", (e)=>{
    console.log(e.key);
});

inputForm.addEventListener("focus", (e)=>{
    inputForm.style.backgroundColor = "#FF0";
});

inputForm.addEventListener("blur", (e)=>{
    inputForm.style.backgroundColor = "";
});

btnGet.addEventListener("click", (e) => {
    searchResult(); //function being hoisted
});

const searchResult = () => {
    const searchValue = inputForm.value.trim();
    if(searchValue){
        divResult.textContent = `You searched for: ${searchValue}`;
    }else{
        divResult.textContent = ``;
    };
};