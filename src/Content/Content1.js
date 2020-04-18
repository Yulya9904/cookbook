import React from 'react';
import cont1 from './Content1.module.css';
import Recipe from './Recipe/Recipe';
import Description from './Description/Description';


const Content = (props) => (
  <div className={cont1.content}>
    <div className={cont1.recipe}>
      {props.RecipeData.map((item, index) => (
        <Recipe
          key={index}
          item={item}
        />
      ))}
    </div>
    <div className={cont1.descriptions}>
      {props.DecriptionRecipe.map((item, index) => (
        <Description
          key={index}
          item={item}
        />
      ))}
    </div>
  </div>
);


export default Content;
