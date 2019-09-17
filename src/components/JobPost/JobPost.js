import React, {Component} from 'react';
import './JobPost.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding, faMapMarkerAlt, faLayerGroup} from '@fortawesome/free-solid-svg-icons'

export class JobPost extends Component {

  render() {
    return (
      <li>
        <div className="title_exp">
          <h4 className="title">{this.props.title}</h4>
          <h4 className="experience">{this.props.experience}</h4>
          <div className="clear"/>
        </div>
        {
          this.props.companyname && (<div className="comp_name">
            <FontAwesomeIcon icon={faBuilding}/>
            <div className="ta_l">{this.props.companyname}</div>
          </div>)
        }
        {
          this.props.location && (<div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <div className="ta_l">{this.props.location}</div>
          </div>)
        }
        {
          this.props.jd && (<div className="jobDesc">
            <h5 className="jd_head ta_l">Job Description:</h5>
            <div className="jd_content ta_l">
              <pre>{this.props.jd}</pre>
            </div>
          </div>)
        }

        {
          this.props.skills && (<div className="skills">
            <FontAwesomeIcon icon={faLayerGroup}/>
            <div className="ta_l">{this.props.skills}</div>
          </div>)
        }

        <div className="salary">
          <span>Salary: </span>
          <div className="ta_l">{this.props.salary || "N/A"}</div>
        </div>


        <div className="foot">
          {
            this.props.source && (<div className="job_source">
              <span>Source:</span>
              <div>{this.props.source}</div>
            </div>)
          }
          <div className="job_type">{this.props.type}</div>
          <div className="clear"/>
        </div>
      </li>
    );
  };
}

export default JobPost;
