/* eslint-disable no-plusplus */
async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  // eslint-disable-next-line no-return-await
  return await response.json();
}
/* *Filter selection input */
/* **************GET A SPECIFIC INGREDIENT VIA INPUT******************* */
async function getDetailedFilterIngredients() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_ingredients span');
  const cards = document.querySelectorAll('span.filter-item-ingredient');
  const searchQuery = document.getElementById('ingredient-input').value;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('is-hidden');
    } else {
      cards[i].classList.add('is-hidden');
    }
  }
  return (filterRender);
}
/** getInputIngredient is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputIngredient() {
  const searchInputIngredient = document.getElementById('ingredient-input');
  searchInputIngredient.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterIngredients, typeInterval);
  });
}

/* **************GET A SPECIFIC APPLIANCE VIA INPUT******************* */

async function getDetailedFilterAppliance() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_appliance span');
  const cards = document.querySelectorAll('span.filter-item-appliance');
  const searchQuery = document.getElementById('appliance-input').value;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase()
      .includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('is-hidden');
    } else {
      cards[i].classList.add('is-hidden');
    }
  }
  return (filterRender);
}
/** getInputAppliance is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputAppliance() {
  const searchInputAppliance = document.getElementById('appliance-input');
  searchInputAppliance.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterAppliance, typeInterval);
  });
}

/* **************GET A SPECIFIC USTENCIL VIA INPUT******************* */
async function getDetailedFilterUstencil() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_ustencils span');
  const cards = document.querySelectorAll('span.filter-item-ustencils');
  const searchQuery = document.getElementById('ustencils-input').value;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].innerText.toLowerCase()
      .includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('is-hidden');
    } else {
      cards[i].classList.add('is-hidden');
    }
  }
  return (filterRender);
}
/** getInputUstencil is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputUstencil() {
  const searchInputUstencil = document.getElementById('ustencils-input');
  searchInputUstencil.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterUstencil, typeInterval);
  });
}
