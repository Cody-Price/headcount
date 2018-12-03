import React, {Component} from 'react';

export default class DistrictRepository extends Component { 
    constructor(data) {
      super(data)
      this.stats = data.reduce((obj, stat) => {
        let upperCaseLocation = stat.Location.toUpperCase();
        if (!obj[upperCaseLocation]) {
          obj[stat.Location.toUpperCase()] = {
            location: stat.Location.toUpperCase(),
            stats: {
              [stat.TimeFrame]: ((Math.round(stat.Data * 1000) / 1000) || 0)
            },
            selected: false
          }
        } else {
          obj[upperCaseLocation].stats[stat.TimeFrame] = ((Math.round(stat.Data * 1000) / 1000) || 0)
        }
        return obj;
      }, {})
    }

    findByName = (searchedName) => {
      let objKeys = Object.keys(this.stats);
      if (searchedName !== ('' || undefined)) {
        var foundName = objKeys.find((stat) => stat.toUpperCase() === searchedName.toUpperCase())
        return this.stats[foundName] || undefined;
      } else {
        return undefined
      }
    }

    findAllMatches = (search) => {
      let keys = Object.keys(this.stats)
      if(!search) {
        return keys
      } else {
        return keys.filter(currentElement => {
          return currentElement.includes(search.toUpperCase())
        })
      }
    }

    roundToThree = (num) => {
      return ((Math.round(num * 1000) / 1000) || 0);
    }

    findAverage = (districtName) => {
      let foundDistrict = this.findByName(districtName.toUpperCase())
      let accumulatedStats = Object.keys(foundDistrict.stats).reduce((acc, year) => {
        acc += foundDistrict.stats[year]
        return acc;
      }, 0)
      let accumulatedAverage = this.roundToThree(accumulatedStats / Object.keys(foundDistrict.stats).length)
      return accumulatedAverage
    }

    compareDistrictAverages = (districtOne, districtTwo) => {
      let averageOne = this.findAverage(districtOne);
      let averageTwo = this.findAverage(districtTwo);
      let result = {};
      result[districtOne.toUpperCase()] = averageOne;
      result[districtTwo.toUpperCase()] = averageTwo;
      result.compared = this.roundToThree(averageOne / averageTwo)
      return result;
    }
    
    render() {
      return(
        <div></div>
      )
    }
  }