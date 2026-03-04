const createUserCard = (user) => {
    const divApp = document.getElementById("divApp");
    const userCard = document.createElement("div");
    userCard.className = "card";

    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s Avatar`;
    const name = document.createElement("h2");
    name.textContent = user.name;
    const login = document.createElement("p");
    login.textContent = `@${user.login}`;
    const bio = document.createElement("p");
    bio.textContent = `${user.bio}`;

    userCard.appendChild(avatar);
    userCard.appendChild(name);
    userCard.appendChild(login);
    userCard.appendChild(bio);
    divApp.appendChild(userCard);
};

const fetchGithubUser = (username) =>{
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            };
        return response.json()})
        .then((user) =>{
            console.log("User", user)
            createUserCard(user);
        })
        .catch((error) =>{
            console.error(error)
            const divApp = document.getElementById("divApp")
            divApp.innerHTML = `<p style="color: red">Error: ${error.message}</p>`
        })
}

fetchGithubUser("Augusto-Caesar");

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