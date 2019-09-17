import React, {Component} from 'react';
import './JobPost.css'

export class JobPost extends Component {

  render() {
    return (
      <li>
        <div className="title_exp">
          <div className="title">{this.props.title}</div>
          <div className="experience">{this.props.experience}</div>
          <div></div>
        </div>
        <div className="comp_name ta_l">{this.props.companyname}</div>
        <div className="location ta_l">{this.props.location}</div>

        <div className="jd ta_l">{this.props.jd}</div>
        <div className="skills ta_l">{this.props.skills}</div>
        <div className="salary ta_l">{this.props.salary}</div>

        <div className="foot">
          <div className="job_source">{this.props.source}</div>
          <div className="job_type">{this.props.type}</div>
          <div></div>
        </div>
      </li>
    );
  };
}

export default JobPost;
