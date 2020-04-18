import { createStore, combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import RecipeReducer from './RecipeReducer';

let reducers = combineReducers({ // создаем объект у которого будуьт свойства ключ: значение CategoryReducer:CategoryReducer
  Categorys: CategoryReducer, // все reducers в один тоже самое
  Recipes: RecipeReducer,
});

const store = createStore(reducers);

export default store;