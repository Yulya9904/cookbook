import { connect } from 'react-redux';
import NewCategory from './NewCategory';
import { AddCategoryActionCreator, UpdateTextNameCatActionCreator, UpdateTextNameUrlActionCreator } from '../redux/CategoryReducer';

const mapStateToProps = (state) => ({
  NewNameCategory: state.Categorys.NewNameCategory,
  UrlNewCat: state.Categorys.UrlNewCat,
});

const mapDispatchToProps = (dispatch) => ({
  addCat: () => { dispatch(AddCategoryActionCreator()); },
  ChangeNameCat: (name) => { dispatch(UpdateTextNameCatActionCreator(name)); },
  ChangeNameUrl: (url) => { dispatch(UpdateTextNameUrlActionCreator(url)); },
});


const NewCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCategory);


export default NewCategoryContainer;

// const NewCategoryContainer = () => {
//   const state = props.store.getState().Categorys;
//   const AddCat = () => {
//     props.store.dispatch(AddCategoryActionCreator());
//   };
//   const ChangeNameCat = (name) => {
//     const action = UpdateTextNameCatActionCreator(name);
//     props.store.dispatch(action);
//   };
//   const ChangeNameUrl = (url) => {
//     const action = UpdateTextNameUrlActionCreator(url);
//     props.store.dispatch(action);
//   };
//   return (
//     <NewCategory
//       addCat={AddCat}
//       ChangeNameCat={ChangeNameCat}
//       ChangeNameUrl={ChangeNameUrl}
//       NewNameCategory={state.NewNameCategory}
//       UrlNewCat={state.UrlNewCat}
//     />
//   );
// };
