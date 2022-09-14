import React from "react";

const Contact = (props) => {
  return (
    <div className="friend-item">
      {/* replace the values by a jsx expression */}
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
      <h4>{props.phone}</h4>
      {/* show the button only if isDeletable is true */}
      {props.isDeletable? <button>Delete</button>:null}
    </div>
  );
};

export default Contact;
