import React from 'react';
import PropTypes from 'prop-types';
import css from './NewRecipe.module.css';
import preloader from '../image/Spinner-1s-296px.svg';

const NewRecipe = (props) => {
  const onAddRecipe = () => {
    props.addRecipe();
    props.SetIsFetshingAC(false)
  };
  const onChangeCategory = (event) => {
    const SelectCat = event.target.value;
    props.ChangeCategory(SelectCat);
  };
  const onChangeNameRecipe = (event) => {
    const name = event.target.value;
    props.ChangeNameRecipe(name);
  };
  const onChangeIngridients = (event) => {
    const Ingridients = event.target.value;
    props.ChangeIngridients(Ingridients);
  };
  const onChangeUrlImage = (event) => {
    const UrlImage = event.target.value;
    props.ChangeUrlImage(UrlImage);
  };
  const onChangeNameEctionList = (event) => {
    const EctionList = event.target.value;
    props.ChangeNameEctionList(EctionList);
  };

  return (
    <>
      { props.isFetching ? <img src={preloader} />
        : (
          <div className={css.content}>
            <div className={css.form}>
              <h2>Добавить рецепт</h2>
              <div className={css.formcontent}>
                <h3>Выберите категорию</h3>
                <select className={css.attending} onChange={onChangeCategory} value={props.SelectCategory}>
                  {props.Category.map((item, index) => (
                    <option value={item.url}>{item.name}</option>
                  ))}
                </select>
                <h3>Название блюда</h3>
                <p><input type="text" onChange={onChangeNameRecipe} value={props.TextNameRecipe} /></p>
                <h3>Ссылка на картинку:</h3>
                <p><input type="text" onChange={onChangeUrlImage} value={props.TextUrlImage} /></p>
                <h3>Ингредиенты:</h3>
                <p><textarea onChange={onChangeIngridients} value={props.TextNameIngridients} /></p>
                <h3>Способ приготовление:</h3>
                <p><textarea onChange={onChangeNameEctionList} value={props.TextActionList} /></p>
                <p><input type="submit" onClick={onAddRecipe} value="Добавить" /></p>
                <br />
              </div>
            </div>
          </div>
        )}
    </>

  // textarea
  );
};

NewRecipe.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewNameCategory: PropTypes.string.isRequired,
};

export default NewRecipe;
