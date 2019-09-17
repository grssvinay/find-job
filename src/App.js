import React, {Component} from 'react';
import './App.css';
import SearchContainer from "./components/SearchContainer/SearchContainer";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";
import {processFiltersData} from "./components/Util";
import axios from "axios";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      totalCount: 0,
      totalProfiles: [],
      experienceOptions: [],
      locationOptions: [],
      skillsOptions: []
    };
  }

  componentDidMount() {
    axios.get('https://nut-case.s3.amazonaws.com/jobs.json').then(jobPostings => {
      this.setState({totalProfiles: jobPostings.data.data, totalCount: jobPostings.data.len});
      this.setState({searchResults: jobPostings.data.data});
      this.setState(processFiltersData(this.state.totalProfiles));
    });
  }

  updateState = data => this.setState({...data});

  render() {
    return (
      <div className="App container" data-testid="app-test">
        <div>FindJob</div>
        <SearchContainer updateState={this.updateState}
                         experienceOptions={this.state.experienceOptions}
                         locationOptions={this.state.locationOptions}
                         skillsOptions={this.state.skillsOptions}/>
        <ResultsContainer searchResults={this.state.searchResults}
                          totalCount={this.state.totalCount}
                          totalProfiles={this.state.totalProfiles}/>
      </div>);
  };
}

export default App;
