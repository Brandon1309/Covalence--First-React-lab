import React from "react";

const Greeter = ({ phrase, name }) => {

  return (
    <div>
      <h2>{phrase} {name}!</h2>
    </div>
  )
}
export default Greeter;