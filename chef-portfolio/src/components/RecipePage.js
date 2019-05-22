import React from 'react';
import styled from 'styled-components';
import {withRouter} from './chefs/ChefCard';

class RecipePage extends React.Components{
    state = {
        recipe: this.props.recipes.filter(
            rec => rec.name === this.props.match.params.id
        )[0]
    };

render() {
    return (
      <Recipe>
        <header>
          <h1>{this.state.recipe.name}</h1>

          <div className="header-contents">
            <div className="recipe-info">
              <img src={this.state.recipe.pic} alt="delicious foods!" />
              <p>
                {this.state.recipe.ingreds.length} ingredient recipe for{" "}
                {this.state.recipe.type}
              </p>
            </div>

            <div>
              <h4>Recipe By:</h4>
              <ChefCard chef={this.state.recipe.chef} />
            </div>
          </div>
        </header>
      </Recipe>
    );
  }
}

export default withRouter(RecipePage);

const Recipe = styled.section`
  header {
    h1 {
      margin: 0 auto;
      font-size: 46px;
    }
    .header-contents {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
`;
