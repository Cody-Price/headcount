import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './main.css';

const CardContainer = ({data, displaySelected, compared1, compared2}) => {
  let cardAcc = 0;
  const givenData = Object.keys(data).map(district => {
    let className = 'district-card';
    cardAcc++;
    if (compared1 && data[district].location === compared1.location) {
      className = 'district-card blue';
    }
    if (compared2 && data[district].location === compared2.location) {
      className = 'district-card blue';
    }
    return <Card  district={data[district]} key={cardAcc} displaySelected={displaySelected} 
                  border={className} />
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