import React from 'react';
// import PropTypes from 'prop-types';

function PersonCard(props) {
    return 
{props.people.map((person) => {
  return ( 
  <div key={person.id} className="panel panel-default">
    <div className="panel-heading" role="tab" id={person.id}>
      <h4 className="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href={person.id} aria-expanded="true" aria-controls="collapseOne">
          {person.personal.first_name}
        </a>
      </h4>
    </div>
    <div id={person.id} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={person.id}>
      <div className="panel-body">
        {person.devices.map((device, id) => {
            return (<p key={id}>{device.name}</p>);
        })}
      </div>
    </div>
  </div>
  );
})}
    
}

// PersonCard.propTypes = {
//     personal: PropTypes.object.isRequired,
//     first_name: PropTypes.string
// };

export default PersonCard;