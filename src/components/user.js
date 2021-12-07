import React from "react";

class User extends React.Component {
     constructor(props) {
       super(props);

       this.state = {
         planet: "earth"
       };
       console.log("Hey I am from constructor");
     }

componentDidMount() {
  this.setState({planet:"Mars"});
  console.log("Hey Iam from componentDidMount");
}


  render() {
    console.log("Hey I am from rendered");
    return (
        <div>
           <h1>{this.props.name}</h1>
           <h4>{this.props.description}</h4>
           <h4>{this.state.planet}</h4>
      </div>

      );
  }
}


export default User;
