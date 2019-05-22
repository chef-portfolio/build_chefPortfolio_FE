 import React from 'react';
 import {BrowserRouter as Router, Route} from 'react-router-dom';


//work in progress
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import ManagePage from "./components/ManagePage";
import RecipePage from "./components/RecipePage";

// create-react-app bootstrapped items
import "./App.css";

// temporary MOCK data
import generate_data from "./mock_data/mock_data";
const data = generate_data();
let recipes = data.recipes;
let chefs = data.chefs;

//function App code here:
function App() {
  return ( 
    <Router>
      <div className="App">
        <NavBar />
        <Route 
          exact
          path="/"
          render={props => <SearchPage recipes={recipes} />}
        />
        <Route
          path="/manage"
          render={props => <ManagePage chefs={chefs} recipes={recipes} />}
        />
        <Route
          path="/recipe/:id"
          render={props => <RecipePage recipes={recipes} />}
        />
        <Route
          path="/edit/:id"
          render={props => <RecipePage recipes={recipes} />}
        />
      </div>
    </Router>
  );
}
export default App;
