import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import RLcss from './RecipeList.module.css';

const Recipe = (props) => {
  const { id, name, urlImage} = props.item;
  const path = `${props.catid}/${id}`;
  return (
      <NavLink to={path}>
        <figure className={RLcss.captionborder}>
          <img src={urlImage} />
          <figcaption>{name}</figcaption>
        </figure>
      </NavLink>

  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
export default Recipe;
