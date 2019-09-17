import React, {Component} from 'react';
import JobPost from "../JobPost/JobPost";

import './ListContainer.css'

export class ListContainer extends Component {

  render() {
    return (
      <div className="jobs_list">
        <ul>
          {this.props.jobs && this.props.jobs.map(post => <JobPost key={post._id} {...post}/>)}
        </ul>
      </div>
    );
  };
}

export default ListContainer;
