import React from 'react';
import styled from 'styled-components';
import RecipeCard from './recipes/RecipeCard';

import SearchForm from './search/SearchForm.js';
import {withRouter} from 'react-router-dom';

// create-react-app bootstrapped items
import logo from "../logo.svg";
import "../App.css";

// class components code here:
class SearchPage extends React.Component {
    state = {
        searchInput: "",
        searchType: "recipes",
        mealType: "all",
        recipeList: []
      };
    
      componentDidMount() {
        this.setState({ recipeList: this.props.recipes });
      }
    
      handleChange = async ev => {
        await this.setState({
          [ev.target.name]: ev.target.value
        });
    
        this.search(ev);
      };
    
      search = () => {
        let searchType = this.state.searchType;
        let searchInput = this.state.searchInput;
        let mealType = this.state.mealType;
    
        function filterRecipes(recipe) {
          let isMatch = true;
    
          if (searchType === "recipes") {
            isMatch = recipe.name.toUpperCase().includes(searchInput.toUpperCase());
          } else if (searchType === "chefs") {
            isMatch = recipe.chef.name
              .toUpperCase()
              .includes(searchInput.toUpperCase());
          } else if (searchType === "ingredients") {
            isMatch = recipe.ingreds
              .join("")
              .toUpperCase()
              .includes(searchInput.toUpperCase());
          }
    
          if (mealType !== "all") {
            if (mealType !== recipe.type) {
              isMatch = false;
            }
          }
          return isMatch;
        }
    
        this.setState({
          recipeList: this.props.recipes.filter(recipe => filterRecipes(recipe))
        });
      };
    
      viewRecipe = (ev, name) => {
        console.log(name);
        this.props.history.push(`/recipe/${name}`);
      };
    
      render() {
        return (
            <>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <SearchForm
                state={this.state}
                handleChange={this.handleChange}
                search={this.search}
              />
              <SearchResults>
                {this.state.recipeList.map((recipe, index) => (
                  <RecipeCard
                    recipe={recipe}
                    key={recipe.name}
                    viewRecipe={this.viewRecipe}
                  />
                ))}
              </SearchResults>
            </>
          );
      }
  }
  
  export default withRouter(SearchPage);
  
  const SearchResults = styled.section`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1500px;
    justify-content: center;
  `;
