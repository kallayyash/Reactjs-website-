import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../components/buttons/Button";
import NavMenu from "./../../components/nav/NavMenu";
import NavItem from "./../../components/nav/NavItem";
import Logo from "./../../components/Logo";
import UserInputs from "./../../components/fields/userInputs";
import Checkbox from "./../../components/fields/checkbox";
import Dropdown from "./../../components/fields/dropDown";
import RadioButton from "./../../components/fields/radioButton";
import TextArea from "./../../components/fields/textArea";
import Footer from './../../components/footer/footer';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Vineet"
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.setState({
          name: "Vineet"
        })
    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.name !== nextState.name) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUnMount() {

    }

    componentWillReceiveProps(nextPorps) {
        console.log(nextPorps);
    }

    enrollMerchant = () => {
        console.log("enroll");
    }

    loginMerchant = () => {
        console.log("login");
    }

    loginAdmin = () => {
        console.log("login admin");
    }

    render() {
      return (
          <div>
          
            <Logo />
              <NavMenu style={{display: 'inline-block'}}>
                  <NavItem path="/login">Merchant Login</NavItem>
                  <NavItem path="/somepath1">How it works?</NavItem>
                  <NavItem path="/somepath2">Why Funds advance</NavItem>
              </NavMenu>
              <div>
                  <Button onClick={this.enrollMerchant} buttonName="Enroll"/>
                  <Button onClick={this.loginMerchant} buttonName="Merchant Login" />
                  <Button onClick={this.loginAdmin} buttonName="Admin Login" />
                
              </div>

              <div>

                  <Footer />
              </div>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});


const divStyle = {
    color: 'red',
    display : 'inline',
   // textAlign: 'center'
  };              



export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
