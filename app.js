let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let btn = document.querySelector("button");
let inputValue = document.querySelector("input");
let cardContainer = document.querySelector(".cards");

btn.addEventListener("click", async ()=>{
    let userFood = inputValue.value;
    let userData = await fetchApi(userFood);
    console.log(userData);
    addFood(userData)
});

function addFood(foodsName){
    cardContainer.innerHTML = " ";
    for(let food of foodsName){
        console.log(food);
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src = "${food.strMealThumb}" alt="${food.strCategory}" />
        <h3>${food.strMeal}</h3>
        <a href= "${food.strYoutube}">Youtube Link</a>
        `;

        cardContainer.appendChild(card);
    }

}


async function fetchApi(mealName) {
    try{
        let res = await axios.get(url + mealName);
        return res.data.meals;
    }
    catch(e){
        return "404 NOT FOUND";
    }
}