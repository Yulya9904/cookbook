import React from 'react';
import PropTypes from 'prop-types';
import css from './NewCategory.module.css';


const NewCategory = (props) => {
  const onAddCat = () => {
    props.addCat();
  };
  const onChangeNameCat = (event) => {
    const name = event.target.value;
    props.ChangeNameCat(name);
  };
  const onChangeNameUrl = (event) => {
    const url = event.target.value;
    props.ChangeNameUrl(url);
  };
  return (
    <div className={css.content}>
      <div className={css.form}>
        <h2>Добавить категорию</h2>
        <div className={css.formcontent}>
          <h3>Наименование категории</h3>
          <p><input type="text" onChange={onChangeNameCat} value={props.NewNameCategory} /></p>
          <h3>URL категории</h3>
          <p><input type="text" onChange={onChangeNameUrl} value={props.UrlNewCat} /></p>
          <p><input type="submit" onClick={onAddCat} value="Добавить" /></p>

          <br />
          <br />
        </div>
      </div>
    </div>
  // textarea
  );
};

NewCategory.propTypes = {
  dispatch: PropTypes.func.isRequired,
  NewNameCategory: PropTypes.string.isRequired,
};

export default NewCategory;
