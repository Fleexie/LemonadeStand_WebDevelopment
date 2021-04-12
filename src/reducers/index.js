export const initialState = {
    stock: 5,
    cash: 2,
    recipe: []
}

export const lemonadeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELL_LEMONADE':
            return{
                stock: state.stock - 1,
                cash: state.cash + 2
            }
        case 'CREATE_LEMONADE':
            console.log(action)

            return {
                stock: state.stock + 1,
                cash: state.cash - 1
            }
        case 'FETCH_RECIPE_REQUEST':
            console.log(action.payload)
            return{
                ...state,
                recipe: action.payload,
                cash: state.cash,
                stock: state.stock
            }
    }
    console.log(action)
    return state;
}