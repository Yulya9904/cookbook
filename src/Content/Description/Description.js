import React from 'react';
import PropTypes from 'prop-types';
import StyleComp from '../Content1.module.css';

const Description = (props) => {
  const { name } = props.item;
  return (
    <div className={StyleComp.description}>
      {name}
    </div>
  );
};

Description.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
export default Description;
