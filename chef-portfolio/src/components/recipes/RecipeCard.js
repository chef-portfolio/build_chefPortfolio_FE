import React from "react";
import styled from "styled-components";

// function components code here:
function RecipeCard(props) {
    return (
      <Card
        image={props.recipe.pic}
        onClick={ev => props.viewRecipe(ev, props.recipe.name)}
      >
        <h2>{props.recipe.name}</h2>
        <p>{props.recipe.type}</p>
        <img src={props.recipe.pic} alt="delicious foods!" />
        <p>{props.recipe.ingreds.length} ingredients</p>
        <p>Recipe by: {props.recipe.chef.name}</p>
      </Card>
    );
  }
  
  const Card = styled.section`
    margin: 10px;
    padding: 10px;
    max-width: 300px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px gray;
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 15px 0px gray;
    }
    :active {
      box-shadow: 0px 0px 15px 0px white;
    }
    h2 {
      font-size: 24px;
    }
    img {
      width: 100%;
      max-height: 500px;
    }
    p {
      font-size: 16px;
    }
  `;
  
  export default RecipeCard;
  