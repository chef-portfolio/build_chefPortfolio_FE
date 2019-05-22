import React from "react";
import styled from "styled-components";

export default function SearchForm(props) {
  return (
    <SearchBar onSubmit={props.search}>
      <select
        name="mealType"
        value={props.state.mealType}
        onChange={props.handleChange}
      >
        <option value="all">All Meal Types</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
      </select>
      <input
        placeholder="search recipes..."
        name="searchInput"
        value={props.state.searchInput}
        onChange={props.handleChange}
      />
      <select
        name="searchType"
        value={props.state.searchType}
        onChange={props.handleChange}
      >
        <option value="recipes">by Recipe Name</option>
        <option value="chefs">by Chef</option>
        <option value="ingredients">by Ingredient</option>
      </select>
    </SearchBar>
  );
}

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  width: 90%;
  input {
    width: 500px;
    font-size: 24px;
  }
`; 
