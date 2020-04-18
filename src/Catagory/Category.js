import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route } from 'react-router-dom';
import * as axios from 'axios';
import cat from './Category.module.css';
import ResipeListContainer from '../ResipeList/RecipeListContainer';
import NewCategoryContainer from '../NewCategory/NewCategoryContainer';
import DataRecipeContainer from '../ResipeList/DataRecipeContainer';
import NewRecipeContainer from '../NewRecipe/NewRecipeContainer';
import HomePage from '../HomePage';

class Category extends Component {
  componentDidMount() {
    axios.get('https://cookbook-4fd81.firebaseio.com/category/CategoryName.json').then((response) => {
      const category = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      this.props.setCategory(category);
    });
  }

  render() {
    return (
      <div>
        <div className={cat.category}>
          <BrowserRouter>
            <div>
              <div className={cat.cat}>
                {this.props.Category.map((item, index) => (
                  <div className={cat.item}>
                    <NavLink
                      key={index}
                      onClick={this.props.selectCategory.bind(this, item.name)}
                      activeClassName={cat.active}
                      to={`/${item.url}`}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                )) }
                <br />
                <br />
                <div className={cat.item}>
                  <NavLink activeClassName={cat.active} to="/NewCategory">Добавить категорию</NavLink>
                </div>
                <div className={cat.item}>
                  <NavLink activeClassName={cat.active} to="/NewRecipe">Добавить рецепт</NavLink>
                </div>
              </div>
            </div>
            <div className={cat.recipe}>
              {this.props.Category.map((item, index) => (
                <div>
                  <Route
                    exact
                    path={`/${item.url}`}
                    render={() => (
                      <ResipeListContainer />
                    )}
                  />
                  <Route
                    exact
                    path={`/${item.url}/:id`}
                    render={() => (
                      <DataRecipeContainer />
                    )}
                  />
                </div>
              )) }   
              <Route
                exact
                path="/NewCategory"
                render={() => (
                  <NewCategoryContainer />
                )}
              />
              <Route
                exact
                path="/NewRecipe"
                render={() => (
                  <NewRecipeContainer />
                )}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <HomePage />
                )}
              />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}


export default Category;
