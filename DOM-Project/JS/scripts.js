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
    text.style.fontSize = "15px";
};
//to manipulate by tagname, you'll also need a "for of"
const titles = document.getElementsByTagName("h2");
for(title of titles){
    title.style.color = "#0Aa";
    title.style.fontSize = "25px";
};

const divFeature = document.querySelector("#divFeature");
const newElement = document.createElement("p");
newElement.textContent = "A brand new paragraph made wholly through JS!";
divFeature.append(newElement);
//below method works the same as above, but in a simpler way
divFeature.insertAdjacentHTML("beforeend", `<p>Another paragraph made wholly in JS!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>`)//template strings allow to breakline