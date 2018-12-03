import React from 'react';
import PropTypes from 'prop-types';
import './main.css';


const ComparedCard = (props) => {
  let {comparison, clearCompare} = props;
    const name1 = Object.keys(comparison)[0];
    const name2 = Object.keys(comparison)[1];
    console.log(comparison);

  return(
    <div className="compared-card">
      <h3>Comparison:</h3>
      <p>{name1} Avg: {Object.values(comparison)[0]}</p>
      <p>{name2} Avg: {Object.values(comparison)[1]}</p>
      <p>{comparison.compared}</p>
      <button onClick={() => clearCompare()}>Clear Comparison</button>
    </div>
  )
}

ComparedCard.propTypes = {
  comparison: PropTypes.object.isRequired,
  clearCompare: PropTypes.func.isRequired
}

export default ComparedCard;