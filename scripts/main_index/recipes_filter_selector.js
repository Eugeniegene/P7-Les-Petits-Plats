function showIngredients (){
    getDataJson();
    const ingredientBox = document.getElementsByClassName('ingredients_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement( 'div' );
    article.className = 'ingredients';

    const headerIngr = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Ingredients';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputIng = document.createElement ('input');
    inputIng.className='input_ingredients';
    inputIng.setAttribute('placeholder', "Ingredients à selectioner")

    const ingredientsListedBloc = document.createElement('div')
    ingredientsListedBloc.className ='list_ingredients';

    //APPEND SECTION
    ingredientBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerIngr);
    headerIngr.appendChild(title);
    headerIngr.appendChild(spanAngle);
    headerIngr.appendChild(arrow);
    headerIngr.appendChild(hiddenAngle);
    headerIngr.appendChild(arrowUp);
    article.appendChild(inputIng);
    article.appendChild(ingredientsListedBloc);

    return (article);
}

showIngredients();

function showAppliance (){
    getDataJson();
    const applianceBox = document.getElementsByClassName('appareils_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement( 'div' );
    article.className = 'appareils';

    const headerAppliance = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Appareils';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputAppliance = document.createElement ('input');
    inputAppliance.className='input_ingredients';
    inputAppliance.setAttribute('placeholder', "Appareils à selectioner")

    const applianceListedBloc = document.createElement('div')
    applianceListedBloc.className ='list_appareils';

    //APPEND SECTION
    applianceBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerAppliance);
    headerAppliance.appendChild(title);
    headerAppliance.appendChild(spanAngle);
    headerAppliance.appendChild(arrow);
    headerAppliance.appendChild(hiddenAngle);
    headerAppliance.appendChild(arrowUp);
    article.appendChild(inputAppliance);
    article.appendChild(applianceListedBloc);

    return (article);
}
showAppliance();

function showUstensils (){
    getDataJson();
    const ustencilsBox = document.getElementsByClassName('ustenciles_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement('div');
    article.className = 'ustencils';

    const headerUstensils = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Ustenciles';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputUstencils = document.createElement ('input');
    inputUstencils.className='input_ingredients';
    inputUstencils.setAttribute('placeholder', "Appareils à selectioner")

    const ustencilsListedBloc = document.createElement('div')
    ustencilsListedBloc.className ='list_ustencils';


    //APPEND SECTION
    ustencilsBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerUstensils);
    headerUstensils.appendChild(title);
    headerUstensils.appendChild(spanAngle);
    headerUstensils.appendChild(arrow);
    headerUstensils.appendChild(hiddenAngle);
    headerUstensils.appendChild(arrowUp);
    article.appendChild(inputUstencils);
    article.appendChild(ustencilsListedBloc);

    return (article);
}
showUstensils();

const fillFiltersAll = (recipes) => {
    let ingredientBlocAppend = document.querySelector(".list_ingredients");
    let applianceBlocAppend = document.querySelector(".list_appareils");
    let ustencilsBlocAppend = document.querySelector(".list_ustencils");
    console.log(ingredientBlocAppend);

    let ingredientsList = [];
    let ustencilsList = [];
    let applianceList = [];
    
    ingredientBlocAppend.innerHTML ="";
    applianceBlocAppend.innerHTML ="";
    ustencilsBlocAppend.innerHTML ="";

    for(let i=0; i<recipes.length; i++) {
        console.log('boucle 1');
        //ingrédients
        for(let j=0; j<recipes[i].ingredients.length; j++) {
            if(ingredientsList.includes(recipes[i].ingredients[j].ingredient) === false) {
                ingredientsList.push(recipes[i].ingredients[j].ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].ingredients[j].ingredient;
                ingredientBlocAppend.appendChild(filterItem);
            }
        }
        //appareils
            console.log('boucle 2');
            if (applianceList.includes(recipes[i].appliance) === false) {
                applianceList.push(recipes[i].appliance);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].appliance;
                applianceBlocAppend.appendChild(filterItem);
                }
        //ustensiles
        for(let j=0; j<recipes[i].ustensils.length; j++) {
            if (ustencilsList.includes(recipes[i].ustensils[j]) === false) {
                ustencilsList.push(recipes[i].ustensils[j]);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].ustensils[j];
                ustencilsBlocAppend.appendChild(filterItem);
                }
            }
        }

}

async function getDataRecipes() {
    const response = await fetch ("data/recipes.json");
    return await response.json();
    //return ({ recipes: [ingredients] });
    //return ({ recipes: [recipes [ingredients]]});
}

async function init(){
    const { recipes } = await getDataRecipes();
    console.log(recipes);
    fillFiltersAll(recipes);
}

init();