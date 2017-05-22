import React from 'react';
import PropTypes from 'prop-types';

// import PersonCard from './PersonCard';

function PersonList (props) {
    return (








<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
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
    <div id={person.id} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div className="panel-body">
        {person.devices.map((device, id) => {
            return (<p key={id}>{device.name}</p>);
        })}
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