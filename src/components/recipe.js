import {React, useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchRecipe} from '../actions/'

function Recipe({ recipeData, fetchRecipe }){


        useEffect(() => {
            fetchRecipe()
        }, [])

    return (
        <div className="container recipe">
            <h1>Our Recipe</h1>

            <h2>{recipeData.strDrink}</h2>
            <img src={recipeData.strDrinkThumb} width="300" />
            <div>
                <h2>Ingredients</h2>
                <ul>
                    <li>{recipeData.strIngredient1} - {recipeData.strMeasure1}</li>
                    <li>{recipeData.strIngredient2} - {recipeData.strMeasure2}</li>
                    <li>{recipeData.strIngredient3} - {recipeData.strMeasure3}</li>
                    <li>{recipeData.strIngredient4} - {recipeData.strMeasure4}</li>

                </ul>
            </div>

            <div>
                <h2>Instructions</h2>
                <p>{recipeData.strInstructions}</p>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        recipeData: state.recipe
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchRecipe: () => dispatch(fetchRecipe())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Recipe);