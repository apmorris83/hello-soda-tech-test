import React from 'react';
import PropTypes from 'prop-types';

function PersonCard(props) {
    return (
            <div id="collapse1" className="panel-collapse collapse in">
                <div className="panel-body">{props.personal.first_name} {props.personal.last_name}</div>
            </div>
    );
}

PersonCard.propTypes = {
    personal: PropTypes.object.isRequired,
    first_name: PropTypes.string
};

export default PersonCard;