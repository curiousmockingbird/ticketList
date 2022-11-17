import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        { /* We add a div with an onClick function */}
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;