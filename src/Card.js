import React from 'react';
import PropTypes from 'prop-types';
import './main.css';


const Card = (props) => {
  let cardAcc = 0;
  const { district, displaySelected } = props;
  let classBorder = 'district-card';
  if (props.district.selected) {
    classBorder = 'blue'
  }

  return(
    <div className={props.border || 'district-card blue'} onClick={() => displaySelected(district)}>
      <h3 className="card-title">{district.location}</h3>
      <ul>
        {
          Object.keys(district.stats).map(year => {
            cardAcc++;
            if (district.stats[year] <= 0.5) {
              return <li key={cardAcc} className="less-than-half">{year}: {district.stats[year]}</li>
            } else {
              return <li key={cardAcc} className="more-than-half">{year}: {district.stats[year]}</li>
            }
          })
        }
      </ul>
    </div>
  )
}

Card.propTypes = {
  district: PropTypes.shape({
    location: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    stats: PropTypes.object.isRequired
  }),
  displaySelected: PropTypes.func.isRequired
}


export default Card;
