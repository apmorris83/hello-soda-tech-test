import React from 'react';
import PropTypes from 'prop-types';

import '../css/PersonList.css';
import DataNav from './DataNav';

function PersonList (props) {
    return (
        <div className="container">
            {props.people.map((person, id) => {
                return (
                    <div className="media box-element" key={person.id} >
                        <div className="media-left">
                            <img className="profile-pic" src={require(`../../public/images/${person.personal.avatar}`)} alt="profile"/>
                            </div>
                            <div className="media-body">
                            <h4>{person.personal.first_name} {person.personal.last_name}, {person.personal.age}</h4>
                            <h5>{person.personal.job_title}, {person.personal.job_company}</h5>
                            <h5>{person.personal.city}, {person.personal.country}</h5>
                            </div>
                            <div className="media-right toggle-button">
                                <a className="btn btn-primary" role="button" data-toggle="collapse" data-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>
                                toggle data
                                </a>
                            </div>
                            
                            <div className="collapse" id={`${id}`}>
        <div className="my-nav">
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="active">
                    <a href="#devices" role="tab" data-toggle="tab" data-target={`#devices, #${id}_devices`}>Devices</a>
                </li>
                <li>
                    <a href="#social" role="tab" data-toggle="tab" data-target={`#social, #${id}_social`}>Social</a>
                </li>
                <li>
                    <a href="#interests" role="tab" data-toggle="tab" data-target={`#interests, #${id}_interests`}>Interests</a>
                </li>
                <li>
                    <a href="#scores" role="tab" data-toggle="tab" data-target={`#scores, #${id}_scores`}>Scores</a>
                </li>
            </ul>
    
    <div className="tab-content container">
      <div className="tab-pane fade active in row" id={`${id}_devices`}>
          {person.devices.map((device, id) => {
              return (
                  
                    <div key={id} className="col-md-3 col-sm-3">
                        <div className="thumbnail data-block">
                        <img className="data-img" src={require('../../public/images/devices.svg')}/>
                        <div className="caption">
                            <h3>{device.vendor} {device.name}</h3>
                            <p>{device.count}</p>
                        </div>
                        </div>
                    </div>
                    
              );
          })}
      </div>
      <div className="tab-pane fade row" id={`${id}_social`}>
          {person.social.map((profile, id) => {
              return (
                  
                    <div key={id} className="col-md-3 col-sm-3">
                        <div className="thumbnail data-block">
                        <img className="data-img" src={require('../../public/images/social.svg')}/>
                        <div className="caption">
                            <h3>{profile.type}</h3>
                            <p>{profile.id}{profile.username}</p>
                        </div>
                        </div>
                    </div>
                    
              );
          })}
      </div>
      <div className="tab-pane fade row" id={`${id}_interests`}>
          {person.interests.map((interest, id) => {
              return (
                  
                    <div key={id} className="col-md-3 col-sm-3">
                        <div className="thumbnail data-block">
                        <img className="data-img" src={require('../../public/images/interests.svg')}/>
                        <div className="caption">
                            <h3>{interest.name}</h3>
                            <p>{interest.count}</p>
                        </div>
                        </div>
                    </div>
                    
              );
          })}
      </div>
      <div className="tab-pane fade row" id={`${id}_scores`}>
              
                    <div key={id} className="col-md-3 col-sm-3">
                        <div className="thumbnail data-block">
                        <img className="data-img" src={require('../../public/images/scores.svg')}/>
                        <div className="caption">
                            <h3>{person.scores.footprint_size}</h3>
                            <p>{person.scores.id}</p>
                        </div>
                        </div>
                    </div>
                   
          
      </div>
    </div>
    
</div>
                            </div>
                        </div>
                    
                );
                })} 
                                           
                            </div>  








    );
}

PersonList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PersonList;