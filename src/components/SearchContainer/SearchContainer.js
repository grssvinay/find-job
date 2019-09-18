import React, {Component} from 'react';
import Select from 'react-select';
import './searchContainer.css'


export class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.locationPref = [];
    this.expPref = '';
    this.skillsPref = [];
  }

  handleChange = _ => {
    this.props.updateState();
  };

  updateExperiencePref = (selectedOptions) => this.expPref = selectedOptions.label;
  updateLocationPref = (selectedOptions) => this.locationPref = selectedOptions.label;
  updateSkillsPref = (selectedOptions) => this.skillsPref = selectedOptions;

  render() {
    return (
      <div className="searchContainer" data-testid="search-test">
        <div className="optionFields">
          <div>
            <h4>Experience</h4>
            <Select options={this.props.experienceOptions}
                    onChange={this.updateExperiencePref}/>
          </div>
          <div>
            <h4>Location</h4>
            <Select options={this.props.locationOptions}
                    onChange={this.updateLocationPref}/>
          </div>
          <div>
            <h4>Skills</h4>
            <Select options={this.props.skillsOptions}
                    onChange={this.updateSkillsPref}/>
          </div>
        </div>
        <div className="search">
          <button onClick={this.handleChange}>Search</button>
        </div>
      </div>
    );
  };
}

export default SearchContainer;
