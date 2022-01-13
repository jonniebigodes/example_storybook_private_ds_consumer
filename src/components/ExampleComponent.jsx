import React from "react";
import PropTypes from "prop-types";

export default function ExampleComponent({ someProp, otherProp }) {
  return (
    <div>
      <h1>Example Component</h1>
      <p>I'm someProp with value of :{someProp}</p>
      <p>I'm otherProp with value of: {otherProp}</p>
    </div>
  );
}

ExampleComponent.propTypes = {
  someProp: PropTypes.string,
  otherProp: PropTypes.number,
};
