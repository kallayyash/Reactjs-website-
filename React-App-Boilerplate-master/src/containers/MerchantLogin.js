import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInputs from "./../components/fields/userInputs";

class MerchantLogin extends Component {

  goback = () => {
      this.props.history.push("/");
  }
  constructor() {
    super();
    this.state = {
      checkbox: 'false',
     
    };
  }

  getInitialState() {
    return {checkbox: ''}
  }
  handleChange(e) {
    this.setState({checkbox: e.target.value})
  }
    render() {
      return (
          <div>
            <h2>Funds Advance Aggrement</h2>

            <div style = {{height : "100px",width:"500px", overflow: "scroll",marginRight : "50px" }}> 
                    <p> New York Stock Exchange (abbreviated as NYSE, and nicknamed "The Big Board"),[6] is an American stock exchange located </p>
                    <p>at 11 Wall Street, Lower Manhattan, New York City, New York. It is by far[7][8] the world's largest stock exchange by market </p>
                    <p>capitalization of its listed companies at US$21.3 trillion as of June 2017.[3] The average daily trading value was approximately </p>
                    <p>US$169 billion in 2013. The NYSE trading floor is located at 11 Wall Street and is composed of 21 rooms used for the facilitation of </p>
                    <p>rading. A fifth trading room, located at 30 Broad Street, was closed in February 2007. The main building and the 11 Wall Street building </p>   
            </div>
<br />
             <div>
                 
                <input type="checkbox" name="checkbox"  value={this.state.checkbox} onChange={this.handleChange} />
                I Agree to the Terms and Conditions
               &nbsp;&nbsp; <button type="button" disabled={!this.state.checkbox}>Submit</button>
            </div>
           
          </div>
      );
    }

    
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(MerchantLogin);
