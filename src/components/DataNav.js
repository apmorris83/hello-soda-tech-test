import React from 'react';
import PropTypes from 'prop-types';

import '../css/DataNav.css';

function DataNav (props) {
    return (
        <div className="my-nav">
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="active">
                    <a href="#devices" role="tab" data-toggle="tab">Devices</a>
                </li>
                <li>
                    <a href="#social" role="tab" data-toggle="tab">Social</a>
                </li>
                <li>
                    <a href="#interests" role="tab" data-toggle="tab">Interests</a>
                </li>
                <li>
                    <a href="#scores" role="tab" data-toggle="tab">Scores</a>
                </li>
            </ul>
    
    <div className="tab-content container">
      <div className="tab-pane fade active in" id="devices">
          {props.devices.map((device) => {
              return device.name;
          })}
      </div>
      <div className="tab-pane fade" id="social">
          {props.social.map((profile) => {
              return profile.type;
          })}
      </div>
      <div className="tab-pane fade" id="interests">
          {props.interests.map((interest) => {
              return interest.name;
          })}
      </div>
      <div className="tab-pane fade" id="scores">
          {props.scores.footprint_size}
      </div>
    </div>
    
</div>

    );
}

DataNav.propTypes = {
    people: PropTypes.array
};

export default DataNav;