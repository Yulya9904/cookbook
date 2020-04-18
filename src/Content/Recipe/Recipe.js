import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyleComp from '../Content1.module.css';

const Recipe = (props) => {
  const { id, name } = props.item;
  const path = `/syp/${id}`;
  return (
    <div className={StyleComp.recipe}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
export default Recipe;
