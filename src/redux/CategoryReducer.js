import * as axios from 'axios';

const ADD_CATEGORY = 'ADD-CATEGORY';
const UPDATE_TEXT_NAME_CAT = 'UPDATE-TEXT-NAME-CAT';
const UPDATE_TEXT_NAME_URL = 'UPDATE-TEXT-NAME-URL';
const SET_CATEGORY = 'SET-CATEGORY';
const SELECT_CATEGORY = 'CHANGE-CATEGORY';

const initialsState = {
  ActiveCategory: 'sdd',
  NewNameCategory: '',
  UrlNewCat: '',
  Category: [], //{ id: 'xc', name: 'Суп', url: 'syp' }
};


const CategoryReducer = (state = initialsState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        Category: [...state.Category, ...action.cat],
      };
    }
    case SELECT_CATEGORY: {
      return {
        ...state,
        ActiveCategory: action.activecat,
      };
    }
    case ADD_CATEGORY: {
      const name = state.NewNameCategory;
      const url = state.UrlNewCat;
      const Recipe = {
        name, url,
      };
      const res = axios.post('https://cookbook-4fd81.firebaseio.com/category/CategoryName.json', Recipe);
      const catNew = state.NewNameCategory;
      const urlNew = state.UrlNewCat;
      return {
        ...state,
        NewNameCategory: '',
        UrlNewCat: '',
        Category: [...state.Category, { id: '5', name: catNew, url: urlNew }],
      };
    }
    case UPDATE_TEXT_NAME_CAT: {
      return {
        ...state,
        NewNameCategory: action.NewName,
      };
    }
    case UPDATE_TEXT_NAME_URL: {
      return {
        ...state,
        UrlNewCat: action.NewUrl,
      };
      // Тоже самое
      // const StateCopy = { ...state };
      // StateCopy.UrlNewCat = action.NewUrl;
      // return StateCopy;
    }
    default:
      return state;
  }
};

export const AddCategoryActionCreator = () => ({ type: ADD_CATEGORY });

export const SelectCategoryActionCreator = (activecat) => ({ type: SELECT_CATEGORY, activecat });

export const UpdateTextNameCatActionCreator = (name) => ({ type: UPDATE_TEXT_NAME_CAT, NewName: name });

export const UpdateTextNameUrlActionCreator = (url) => ({ type: UPDATE_TEXT_NAME_URL, NewUrl: url });

export const SetCategoryActionCreator = (category) => ({ type: SET_CATEGORY, cat: category });

export default CategoryReducer;
