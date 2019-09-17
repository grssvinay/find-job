import React, {Component} from 'react';
import ListContainer from "../ListContainer/ListContainer";
import './ResultsContainer.css'

export class ResultsContainer extends Component {

  render() {
    return (
      <div className="resultsContainer" data-testid="results-test">
        {
          this.props.searchResults.length > 0 ?
            (<div>
                <div className="resultsCount">
                  <span>
                    Showing {this.props.searchResults.length} of {this.props.totalCount}
                  </span>
                </div>
                <ListContainer jobs={this.props.searchResults}/>
              </div>
            ) : ( <div>No Results Found</div> )
        }
      </div>
    );
  };
}

export default ResultsContainer;
