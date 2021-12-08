import React, {useState, useEffect} from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("earth");

  //componentDidMount
  useEffect(() => {
    console.log("Component mounting");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("Planet changes");
  }, [planet]);
  return(
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button onClick={() => setPlanet("pluto")}>{planet}</button>
      </div>
  );
};

export default User;
