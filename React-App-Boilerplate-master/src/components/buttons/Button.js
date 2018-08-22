import React, { Component } from "react";

class Button extends Component {

    render() { 
      return (
          <button onClick={this.props.onClick}> Go to Dashboard
              {this.props.buttonName}
          </button>
      );
    }
}


export default Button;
