import React, {Component} from 'react'
import './RecipeList.css'
import PropTypes from 'prop-types'
import Recipe from './Recipe'

class RecipeList extends Component {

    // default data
    static defaultProps = {
        recipes: [
          {
            title: "Spaghetti",
            instructions: "Open jar of Spaghetti sauce...",
            ingredients: ["pasta", "8 oz water", "1 box spaghetti"],
            img: "https://i.imgur.com/2q2OgnC.jpg"
          },
          {
            title: "Lobster Macaroni and cheese",
            instructions: "Combine lobster and macaroni.  Blend until creamy",
            ingredients: ["1 large lobster", "8 oz of macaroni"],
            img: "https://i.imgur.com/cUvCIrl.jpg"
          },
          {
            title: "Bacon Wrapped Filet Mignon",
            instructions: "Wrap filet mignon in bacon.  Add salt, oil, and pepper to taste.",
            ingredients: ["1 slice of bacon", "1 tbs olive oil", "1 pinch salt", "pepper"],
            img: "https://i.imgur.com/zdkqhsb.jpg"
          }
        ]
      }

      // states that recipes data is required and must be an array
      static propTypes = {
          recipes: PropTypes.arrayOf(PropTypes.object).isRequired
      }

    render(){
        const recipes = this.props.recipes.map((r, index) => (
            <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipe-list">{recipes}</div>
        )
    }
}

export default RecipeList;