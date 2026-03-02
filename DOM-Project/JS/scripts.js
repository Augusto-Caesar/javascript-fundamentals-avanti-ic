const buttonAlert = document.querySelector("#openAlert");
    buttonAlert.addEventListener("click", () =>{
        alert("Opening a window made by Linked JS!")
});

const divContent = document.getElementById("divContent");
divContent.innerHTML = `<p>Paragraph inserted through a JS linked file!</p>`
divContent.style.color = "#F00";
divContent.style.fontSize = "18px";

const classText = document.getElementsByClassName("text");
//in order to edit elements grouped by class, you need "for of"
for(text of classText){
    text.style.color = "#00a";
};
//to manipulate by tagname, you'll also need a "for of"
const titles = document.getElementsByTagName("h2");
for(title of titles){
    title.style.color = "#0Aa";
};