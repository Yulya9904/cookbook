import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import DataRecipe from './DataRecipe';
import {
  UpdateNameRecipeActionCreator,
  UpdateIngridientsRecipeActionCreator,
  UpdateEctionListRecipeActionCreator,
  UpdateIrlImageRecipeActionCreator,
  ChangeCategoryAC, SetIsFetshingAC,
  ChangeRecipeAC, GetDataRecipeAC, SetActiveRecipeAC
} from '../redux/RecipeReducer';
import preloader from '../image/Spinner-1s-296px.svg';

class DataRecipeContainer extends Component {
  componentDidMount() {
    const { url } = this.props.match;
    this.props.SetIsFetshingAC(true);
    axios.get(`https://cookbook-4fd81.firebaseio.com/category${url}.json`).then((response) => {
      this.props.SetIsFetshingAC(false);
      this.props.SetActiveRecipeAC(response.data);
    });
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <img src={preloader} />
          : <DataRecipe {...this.props} RecipeActive={this.props.ActiveRecipe} url={this.props.match.url} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  Category: state.Categorys.Category,
  TextNameRecipe: state.Recipes.TextNameRecipe,
  TextNameIngridients: state.Recipes.TextNameIngridients,
  TextUrlImage: state.Recipes.TextUrlImage,
  TextActionList: state.Recipes.TextActionList,
  Recipe: state.Recipes.Recipe,
  ActiveRecipe: state.Recipes.ActiveRecipe,
  isFetching: state.Recipes.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  SetActiveRecipeAC: (recipe) => { dispatch(SetActiveRecipeAC(recipe)); },
  ChangeRecipe: (url) => { dispatch(ChangeRecipeAC(url)); },
  GetDataRecipe: () => { dispatch(GetDataRecipeAC()); },
  SetIsFetshingAC: (isFetching) => { dispatch(SetIsFetshingAC(isFetching)); },
  ChangeNameRecipe: (name) => { dispatch(UpdateNameRecipeActionCreator(name)); },
  ChangeCategory: (SelectCat) => { dispatch(ChangeCategoryAC(SelectCat)); },
  ChangeNameEctionList: (name) => { dispatch(UpdateEctionListRecipeActionCreator(name)); },
  ChangeUrlImage: (name) => { dispatch(UpdateIrlImageRecipeActionCreator(name)); },
  ChangeIngridients: (name) => { dispatch(UpdateIngridientsRecipeActionCreator(name)); },
});
// const mapDispatchToProps = (dispatch) => ({
//   setRecipe: (recipe) => { dispatch(SetRecipeActionCreator(recipe)); },
// });
const WithUrlRecipe = withRouter(DataRecipeContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlRecipe);
