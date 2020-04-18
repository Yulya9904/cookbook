import { connect } from 'react-redux';
import withRouter from 'react-router-dom';
import Category from './Category';
import { SetCategoryActionCreator, SelectCategoryActionCreator } from '../redux/CategoryReducer';

const mapStateToProps = (state) => ({
  Category: state.Categorys.Category,
  ActiveCategory: state.Categorys.ActiveCategory,
  // выполнении connnect subscribe перересует ту часть которую тут забрали у state
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => { dispatch(SetCategoryActionCreator(category)); },
  selectCategory: (activecat) => { dispatch(SelectCategoryActionCreator(activecat)); },
});

//const UrlData = withRouter(CategoryContainer);
const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);


export default CategoryContainer;
