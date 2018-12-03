import React from 'react';
import Card from './Card';
import ComparedCard from './ComparedCard';
import PropTypes from 'prop-types';
import './main.css';

const ComparisonContainer = (props) => {
  let card1 = null;
  let card2 = null;
  let card3 = null;
  let {compared1, compared2, comparison, displaySelected, clearCompare} = props;

  if (compared1 !== null) {
    card1 = <Card district={compared1} displaySelected={displaySelected} />
  }
  if (compared2 !== null) {
    card2 = <Card district={compared2} displaySelected={displaySelected} />
  }
  if (comparison !== null) {
    card3 = <ComparedCard comparison={comparison} clearCompare={clearCompare}/>
  }

  return(
    <div className="comparison-container">
      <div>{card1}</div>
      <div>{card3}</div>
      <div>{card2}</div>
    </div>
  )
}

ComparisonContainer.propTypes = {
  compared1: PropTypes.object,
  compared2: PropTypes.object,
  comparison: PropTypes.object,
  displaySelected: PropTypes.func.isRequired,
  clearCompare: PropTypes.func.isRequired
}

export default ComparisonContainer;