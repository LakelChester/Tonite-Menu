// DOM Render Functions (Titles and pictures of Recipes)
//function renderRecipe(recipe) {
//    let recipeCard = documnet.createElement('li')
//    recipeCard.className = 'card'
//    recipeCard.innerhtml = ''
//        <img scr ='${recipe.imageurl}'>
//        <><div class='content'>
//                <h4>${recipeCard.name}</h4>
//                <p>
//                    $<span class="Add Recipe">${recipeCard.donations}</span> added
//                </p>

//                <p>${recipeCard.description}</p>
//            </div><div class="buttons">
//                    <button> Select Recipe </button>
//                </div>

// To Add Recipe Card to DOM

    //document.querySelector('recipe.list').appendChild(card)

//}


//Fetch Requests
//Get Fetch for all Recipe resources

function getAllRecipes(){
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e3fd2432ac2e4170a1303b4f11d6d026')
    .then(res => res.json())
    .then(recipeData => recipeData.foreach(animal => renderRecipe(recipe)))
    console.log('before fetch returns')
}



//Initial Render
//Get and Render Our Animals to the DOM

//function intialize(){
    //recipeData.forEach(recipe => renderRecipe(recipe))
//}

//intialize()


//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

