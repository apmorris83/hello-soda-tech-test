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
                                <DataNav {...person}/>
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