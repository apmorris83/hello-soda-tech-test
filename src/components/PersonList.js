import React from 'react';
import PropTypes from 'prop-types';

import '../css/PersonList.css';

function PersonList(props) {
    return (
        <div className="container">
            {props.people.map((person, id) => {
                return (
                    <div className="media box-element" key={person.id} >
                        <div className="media-left">
                            <img className="profile-pic" src={require(`../../public/images/${person.personal.avatar}`)} alt="profile" />
                        </div>
                        <div className="media-body">
                            <h4><strong>{person.personal.first_name} {person.personal.last_name}</strong>, {person.personal.age}</h4>
                            <h5>{person.personal.job_title}, {person.personal.job_company}</h5>
                            <h5>{person.personal.city}, {person.personal.country}</h5>
                        </div>
                        <div className="media-right toggle-button media-middle">
                            <a className="btn btn-primary" role="button" data-toggle="collapse" data-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>Show / Hide data</a>
                        </div>

                        <div className="collapse" id={`${id}`}>
                            <div className="my-nav">
                                <ul className="nav nav-tabs nav-justified" role="tablist">
                                    <li className="active">
                                        <a href="#devices" role="tab" data-toggle="tab" data-target={`#${id}_devices`}>Devices</a>
                                    </li>
                                    <li>
                                        <a href="#social" role="tab" data-toggle="tab" data-target={`#${id}_social`}>Social</a>
                                    </li>
                                    <li>
                                        <a href="#interests" role="tab" data-toggle="tab" data-target={`#${id}_interests`}>Interests</a>
                                    </li>
                                    <li>
                                        <a href="#scores" role="tab" data-toggle="tab" data-target={`#${id}_scores`}>Scores</a>
                                    </li>
                                </ul>

                                <div className="tab-content container-fluid">
                                    <div className="tab-pane fade active in row" id={`${id}_devices`}>
                                        {person.devices.map((device, id) => {
                                            return (
                                                <div key={id} className="col-lg-2 col-md-3 col-sm-6">
                                                    <div className="thumbnail data-block">
                                                        <img className="data-img" src={require('../../public/images/devices.png')} />
                                                        <div className="caption">
                                                            <h4><strong>{device.vendor} {device.name}</strong></h4>
                                                            <h5><strong>Count</strong> {device.count}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="tab-pane fade row" id={`${id}_social`}>
                                        {person.social.map((profile, id) => {
                                            if (profile.type === 'twitter') {
                                                return (
                                                    <div key={id} className="col-lg-2 col-md-3 col-sm-6">
                                                        <div className="thumbnail data-block">
                                                            <img className="data-img" src={require('../../public/images/twitter.png')} />
                                                            <div className="caption">
                                                                <h4><strong>{profile.type}</strong></h4>
                                                                <h5><strong>Profile ID</strong> {profile.id}{profile.username}</h5>
                                                                <h5><strong>Account Age</strong> {profile.account_age} years</h5>
                                                                <h5><strong>Followers</strong> {profile.followers}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            if (profile.type === 'facebook') {
                                                return (
                                                    <div key={id} className="col-lg-2 col-md-3 col-sm-6">
                                                        <div className="thumbnail data-block">
                                                            <img className="data-img" src={require('../../public/images/facebook.png')} />
                                                            <div className="caption">
                                                                <h4><strong>{profile.type}</strong></h4>
                                                                <h5><strong>Profile ID</strong> {profile.id}{profile.username}</h5>
                                                                <h5><strong>Account Age</strong> {profile.account_age} years</h5>
                                                                <h5><strong>Friends</strong> {profile.friends}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            else {
                                                return (
                                                    <div key={id} className="col-lg-2 col-md-3 col-sm-6">
                                                        <div className="thumbnail data-block">
                                                            <img className="data-img" src={require('../../public/images/social.png')} />
                                                            <div className="caption">
                                                                <h4><strong>{profile.type}</strong></h4>
                                                                <h5><strong>Profile ID</strong> {profile.id}{profile.username}</h5>
                                                                <h5><strong>Account Age</strong> {profile.account_age} years</h5>
                                                                <h5><strong>Followers / Friends</strong> {profile.followers}{profile.friends}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="tab-pane fade row" id={`${id}_interests`}>
                                        {person.interests.map((interest, id) => {
                                            return (
                                                <div key={id} className="col-lg-2 col-md-3 col-sm-6">
                                                    <div className="thumbnail data-block-interests">
                                                        <img className="data-img" src={require('../../public/images/interests.png')} />
                                                        <div className="caption">
                                                            <h4><strong>{interest.name}</strong></h4>
                                                            <h5><strong>Count</strong> {interest.count}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="tab-pane fade row" id={`${id}_scores`}>
                                        <div className="col-lg-2 col-md-3 col-sm-6">
                                            <div className="thumbnail data-block-scores">
                                                <img className="data-img" src={require('../../public/images/footprint.png')} />
                                                <div className="caption">
                                                    <h4><strong>Footprint</strong></h4>
                                                    <h5><strong>Size</strong> {person.scores.footprint_size}%</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-sm-6">
                                            <div className="thumbnail data-block-scores">
                                                <img className="data-img" src={require('../../public/images/commenter.png')} />
                                                <div className="caption">
                                                    <h4><strong>Commenter</strong></h4>
                                                    <h5><strong>Size</strong> {person.scores.commenter}%</h5>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-sm-6">
                                            <div className="thumbnail data-block-scores">
                                                <img className="data-img" src={require('../../public/images/sharer.png')} />
                                                <div className="caption">
                                                    <h4><strong>Sharer</strong></h4>
                                                    <h5><strong>Size</strong> {person.scores.sharer}%</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-sm-6">
                                            <div className="thumbnail data-block-scores">
                                                <img className="data-img" src={require('../../public/images/id.png')} />
                                                <div className="caption">
                                                    <h4><strong>ID</strong></h4>
                                                    <h5><strong>Size</strong> {person.scores.id}%</h5>
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