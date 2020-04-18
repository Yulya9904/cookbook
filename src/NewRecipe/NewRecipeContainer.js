import { connect } from 'react-redux';
import NewRecipe from './NewRecipe';
import {
  AddRecipeActionCreator, UpdateNameRecipeActionCreator,
  UpdateIngridientsRecipeActionCreator,
  UpdateEctionListRecipeActionCreator,
  UpdateIrlImageRecipeActionCreator,
  ChangeCategoryAC, SetIsFetshingAC
} from '../redux/RecipeReducer';

const mapStateToProps = (state) => ({
  NewNameCategory: state.Categorys.NewNameCategory,
  Category: state.Categorys.Category,
  UrlNewCat: state.Categorys.UrlNewCat,
  TextNameRecipe: state.Recipes.TextNameRecipe,
  TextNameIngridients: state.Recipes.TextNameIngridients,
  TextUrlImage: state.Recipes.TextUrlImage,
  TextActionList: state.Recipes.TextActionList,
  SelectCategory: state.Recipes.SelectCategory,
  isFetching: state.Recipes.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: () => { dispatch(AddRecipeActionCreator()); },
  SetIsFetshingAC: (isFetching) => { dispatch(SetIsFetshingAC(isFetching)); },
  ChangeNameRecipe: (name) => { dispatch(UpdateNameRecipeActionCreator(name)); },
  ChangeCategory: (SelectCat) => { dispatch(ChangeCategoryAC(SelectCat)); },
  ChangeNameEctionList: (name) => { dispatch(UpdateEctionListRecipeActionCreator(name)); },
  ChangeUrlImage: (name) => { dispatch(UpdateIrlImageRecipeActionCreator(name)); },
  ChangeIngridients: (name) => { dispatch(UpdateIngridientsRecipeActionCreator(name)); },
  // const action = UpdateTextNameCatActionCreator(name); object
  // dispatch(action);
});


const NewCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(NewRecipe);


export default NewCategoryContainer;
