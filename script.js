let contDetails = document.getElementById("container")
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) => res.json())
    .then((data) => {
        data.map((ele) => {
            createCard(ele);
        });
    })
    .catch((err) => console.log(err));
function createCard(ele) {
    contDetails.innerHTML += `
        <img src="${ele.url}" class="cat" alt="No Image">
        `;
}