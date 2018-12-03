import React, { Component } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import SearchBar from './SearchBar';
import ComparisonContainer from './ComparisonContainer';
import incomingData from './data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      compared1: null,
      compared2: null,
      comparedCard: null
    }
  }

  componentDidMount = () => {
    const data = new DistrictRepository(incomingData).stats
    this.setState({data})
  }

  search = (search) => {
    const districtRepository = new DistrictRepository(incomingData)
    const matchedNames = districtRepository.findAllMatches(search)
    const matchedObj = matchedNames.reduce((obj, match) => {
      obj[match]= districtRepository.stats[match]
      return obj
    },{})
    this.setState({
      data: matchedObj
    })
  }

  displaySelected = (clickedCard) => {
    const helper = new DistrictRepository(incomingData);
    const clickedCompare = helper.findByName(clickedCard.location)

    if(!this.state.compared1) {
      this.setState({
        compared1: clickedCompare
      },() => this.displayComparison())
    } else {
      this.setState({
        compared2: clickedCompare
      },() => this.displayComparison());
    }
  }

  displayComparison = () => {
    if(this.state.compared1 && this.state.compared2) {
      console.log('display comparison firing');
      const helper = new DistrictRepository(incomingData);
      const comparison = helper.compareDistrictAverages(this.state.compared1.location, this.state.compared2.location)
      this.setState({
        comparedCard: comparison
      })
    }
  }


  clearCompare = () => {
    let newData = new DistrictRepository(incomingData).stats;
    this.setState({data: newData, compared1: null, compared2: null, comparedCard: null})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar search={this.search} />
        <ComparisonContainer  compared1={this.state.compared1}
                              compared2={this.state.compared2}
                              comparison={this.state.comparedCard}
                              displaySelected={this.displaySelected}
                              clearCompare={this.clearCompare} />
        <CardContainer  data={this.state.data} 
                        displaySelected={this.displaySelected} 
                        compared1={this.state.compared1}
                        compared2={this.state.compared2} />
      </div>
    );
  }
}

export default App;