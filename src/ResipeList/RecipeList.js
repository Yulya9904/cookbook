import React from 'react';
import css from './RecipeList.module.css';
import Recipe from './Recipe';


const RecipeList = (props) => (
  <div className={css.content}>
    <div className={css.form}>
      <h2>{props.ActiveCategory}</h2>
      <div className={css.formcontent}>
        <div className={css.content}>
          <div className={css.recipe}>
            {props.RecipeActiveCategory.map((item, index) => (
              <Recipe
                catid={props.catid}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
);


export default RecipeList;
