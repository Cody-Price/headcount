import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './main.css';

const CardContainer = ({data, displaySelected}) => {
  let cardAcc = 0;
  const givenData = Object.keys(data).map(district => {
    cardAcc++;
    return <Card district={data[district]} key={cardAcc} displaySelected={displaySelected} />
  })
  return(
    <div className="card-container">
      {givenData}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired,
  displaySelected: PropTypes.func.isRequired,
}

export default CardContainer;