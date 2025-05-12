let wrapper = document.createElement("div");
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

fetch('https://dummyjson.com/recipes?limit=3')
    .then(res => res.json())
    .then((data) => {
        for (const recipe of data.recipes) {
            let recipeDiv = document.createElement("div");
            recipeDiv.className = 'recipeDiv';

            let idH2 = document.createElement("h2");
            idH2.innerText = `ID: ${recipe.id}`;

            let nameP = document.createElement("p");
            nameP.innerText = `Name: ${recipe.name}`;

            let ingredientsUl = document.createElement("ul");
            ingredientsUl.className = 'ingredientsUl';
            
            for (const item of recipe.ingredients) {
                let ingredientsLi = document.createElement("li");
                ingredientsLi.innerText = item;
                ingredientsUl.appendChild(ingredientsLi);
            }

            let instructionUl = document.createElement("ul");
            instructionUl.className = 'instructionUl';
            for (const item of recipe.instructions) {
                let instructionsLi = document.createElement("li");
                instructionsLi.innerText = item;
                instructionUl.appendChild(instructionsLi);
            }

            let prepTimeMinP = document.createElement("p");
            prepTimeMinP.innerText = `Prep time: ${recipe.prepTimeMinutes} min`;

            let cookTimeMinP = document.createElement("p");
            cookTimeMinP.innerText = `Cook time: ${recipe.cookTimeMinutes} min`;

            let servingsP = document.createElement("p");
            servingsP.innerText = `Servings: ${recipe.servings}`;

            let difficultyP = document.createElement("p");
            difficultyP.innerText = `Difficulty: ${recipe.difficulty}`;

            let img = document.createElement("img");
            img.src = recipe.image;
            
            recipeDiv.appendChild(idH2);
            recipeDiv.appendChild(nameP);
            recipeDiv.appendChild(ingredientsUl);
            recipeDiv.appendChild(instructionUl);
            recipeDiv.appendChild(prepTimeMinP);
            recipeDiv.appendChild(cookTimeMinP);
            recipeDiv.appendChild(servingsP);
            recipeDiv.appendChild(difficultyP);
            recipeDiv.appendChild(img);
            
            wrapper.appendChild(recipeDiv);
        }
    })
    
