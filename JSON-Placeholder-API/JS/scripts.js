fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((posts) => {
    const divContainer = document.querySelector("#divContainer");
    posts.map(post =>{
        console.log(post.title);
        const h2 = document.createElement("h2");
        h2.textContent = post.title;
        divContainer.appendChild(h2);
    })
});