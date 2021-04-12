import axios from "axios";

export const createLemonade = () => ({
    type: 'CREATE_LEMONADE'
});
export const sellLemonade = () => ({
    type: 'SELL_LEMONADE'
});

export const CREATE_LEMONADE = 'CREATE_LEMONADE';
export const SELL_LEMONADE = 'SELL_LEMONADE';

export const fetchRecipeRequest = (data) => {
    return {
        type: 'FETCH_RECIPE_REQUEST',
        payload: data
    }
}

export const fetchRecipe = () => {
    return(dispatch) => {
        dispatch(fetchRecipeRequest)
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13036')
            .then(response => {
                const recipe = response.data
                dispatch(fetchRecipeRequest(recipe.drinks[0]))
                console.log(recipe.drinks[0])
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
            })
    }
}