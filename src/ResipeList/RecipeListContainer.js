import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import RecipeList from './RecipeList';
import { SetActiveCategoryActionCreator, SetIsFetshingAC } from '../redux/RecipeReducer';
import preloader from '../image/Spinner-1s-296px.svg';

class RecipeListContainer extends Component {
  componentDidMount() {
    const catid = this.props.match.path;
    let recipe = [];
    this.props.SetIsFetshingAC(true);
    axios.get(`https://cookbook-4fd81.firebaseio.com/category${catid}.json`).then((response) => {
      this.props.SetIsFetshingAC(false);
      if (response.data === null || response.data === undefined) {
        recipe = [];
      } else {
        recipe = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
      }
      this.props.SetIsFetshingAC(false);
      this.props.SetActiveCategoryActionCreator(recipe);
    });
  }

  /* <img src={preloader} />
         */
  render() {
    return (
      <>
        { this.props.isFetching ? <img src={preloader} />
          : <RecipeList {...this.props} RecipeActiveCategory={this.props.RecipeCategory} catid={this.props.match.path} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  Recipe: state.Recipes.Recipe,
  ActiveCategory: state.Categorys.ActiveCategory,
  RecipeCategory: state.Recipes.ActiveCategory,
  isFetching: state.Recipes.isFetching,
});

// const mapDispatchToProps = (dispatch) => ({
//   setRecipe: (recipe) => { dispatch(SetRecipeActionCreator(recipe)); },
// });
const WithUrlCategoryRecipe = withRouter(RecipeListContainer);
export default connect(mapStateToProps, { SetActiveCategoryActionCreator, SetIsFetshingAC })(WithUrlCategoryRecipe);
