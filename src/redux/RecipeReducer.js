/* eslint-disable max-len */
import * as axios from 'axios';

const ADD_RECIPE = 'ADD-RECIPE';
const UPDATE_TEXT_RECIPE_NAME = 'UPDATE-TEXT-RECIPE-NAME';
const UPDATE_TEXT_INGRIDINTS = 'UPDATE-TEXT-INGRIDINTS';
const UPDATE_TEXT_URL_IMAGE = 'UPDATE_TEXT_URL_IMAGE';
const UPDATE_TEXT_ECTION_LIST = 'UPDATE_TEXT_ECTION_LIST';
const SET_RECIPE = 'SET-RECIPE';
const SET_ACTIVE_CATEGORY = 'SET-SET_ACTIVE_CATEGORY';
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING';
const SET_ACTIVE_RECIPE = 'SET-ACTIVE-RECIPE';
const CHANGE_SELECT_CATEGORY = 'CHANGE-SELECT-CATEGORY';
const CHANGE_RECIPE = 'CHANGE-RECIPE';
const DATA_RECIPE_CHANGE = 'DATA_RECIPE_CHANGE';

const initialsState = {
  TextNameRecipe: '',
  TextNameIngridients: '',
  TextUrlImage: '',
  TextActionList: '',
  ActiveCategory: [],
  ActiveRecipe: [],
  isFetching: false,
  SelectCategory: 'salat',
  Recipe: [
    { id: 1, catid: 'salaty', name: 'dfggf' },
    { id: 2, catid: 'salaty', name: '2132' },
    { id: 3, catid: 'syp', name: 'fgdf' },
  ],
};


const RecipeReducer = (state = initialsState, action) => {
  switch (action.type) {
    case SET_RECIPE: {
      return {
        ...state,
        Recipe: [...state.Recipe, ...action.recipe],
      };
    }
    case ADD_RECIPE: {
      const recipeNew = state.NewNameRecipe;
      const name = state.TextNameRecipe;
      const urlImage = state.TextUrlImage;
      const ingridients = state.TextNameIngridients;
      const actionList = state.TextActionList;
      const SelectCategory = state.SelectCategory;
      const Recipe = {
        name, urlImage, ingridients, actionList,
      };
      axios.post(`https://cookbook-4fd81.firebaseio.com/category/${SelectCategory}.json`, Recipe).then(
      );
      return { ...state,
        TextNameRecipe: '',
        TextNameIngridients: '',
        TextUrlImage: '',
        TextActionList: '', };
    }
    case DATA_RECIPE_CHANGE: {
      return {
        ...state,
        TextNameIngridients: state.ActiveRecipe.ingridients,
        TextNameRecipe: state.ActiveRecipe.name,
        TextActionList: state.ActiveRecipe.actionList,
        TextUrlImage: state.ActiveRecipe.urlImage,

      };
    }
    case CHANGE_RECIPE: {
      const name = state.TextNameRecipe;
      const urlImage = state.TextUrlImage;
      const ingridients = state.TextNameIngridients;
      const actionList = state.TextActionList;
      const SelectCategory  = state.SelectCategory;
      const Recipe = {
        name, urlImage, ingridients, actionList,
      };
      axios.put(`https://cookbook-4fd81.firebaseio.com/category${action.url}.json`, Recipe).then(
        // state.isFetching = false,
      );
      return { ...state, 
        ActiveRecipe: { name, urlImage, actionList, ingridients },
        TextNameRecipe: '',
        TextNameIngridients: '',
        TextUrlImage: '',
        TextActionList: '' };
    }
    case UPDATE_TEXT_INGRIDINTS: {
      return {
        ...state,
        TextNameIngridients: action.NewIng,
      };
    }
    case CHANGE_SELECT_CATEGORY: {
      return {
        ...state,
        SelectCategory: action.SelectCat,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return {
        ...state,
        ActiveCategory: action.ActCat,
      };
    }
    case SET_ACTIVE_RECIPE: {
      return {
        ...state,
        ActiveRecipe: action.recipe,
        TextNameRecipe: '',
        TextNameIngridients: '',
        TextUrlImage: '',
        TextActionList: ''
      };
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case UPDATE_TEXT_RECIPE_NAME: {
      return {
        ...state,
        TextNameRecipe: action.NewName,
      };
    }
    case UPDATE_TEXT_ECTION_LIST: {
      return {
        ...state,
        TextActionList: action.Ection_List,
      };
    }
    case UPDATE_TEXT_URL_IMAGE: {
      return {
        ...state,
        TextUrlImage: action.NewImgUrl,
      };
    }
    default:
      return state;
  }
};

export const AddRecipeActionCreator = () => ({ type: ADD_RECIPE });

export const ChangeRecipeAC = (url) => ({ type: CHANGE_RECIPE, url });

export const GetDataRecipeAC = () => ({ type: DATA_RECIPE_CHANGE });

export const ChangeCategoryAC = (SelectCat) => ({ type: CHANGE_SELECT_CATEGORY, SelectCat });

export const SetRecipeActionCreator = (recipe) => ({ type: SET_RECIPE, recipe });

export const SetActiveRecipeAC = (recipe) => ({ type: SET_ACTIVE_RECIPE, recipe });

export const SetIsFetshingAC = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });

export const SetActiveCategoryActionCreator = (ActCat) => ({ type: SET_ACTIVE_CATEGORY, ActCat });


export const UpdateNameRecipeActionCreator = (name) => ({ type: UPDATE_TEXT_RECIPE_NAME, NewName: name });

export const UpdateIngridientsRecipeActionCreator = (name) => ({ type: UPDATE_TEXT_INGRIDINTS, NewIng: name });

export const UpdateEctionListRecipeActionCreator = (name) => ({ type: UPDATE_TEXT_ECTION_LIST, Ection_List: name });

export const UpdateIrlImageRecipeActionCreator = (name) => ({ type: UPDATE_TEXT_URL_IMAGE, NewImgUrl: name });

// export const SetResipeCreator = () => ({ type: SET_RECIPE});
// export const UpdateTextNameUrlActionCreator = (url) => ({ type: UPDATE_TEXT_NAME_RECIPE, NewUrl: url });


export default RecipeReducer;
