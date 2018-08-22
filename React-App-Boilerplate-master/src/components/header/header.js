import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(

            <div>
             <h2 style={Headers}>
             First Data &copy; 2018     
             </h2>  

            </div>
        );
    }
}

const headers={
   
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#004165",
        color: "white",
        textAlign: "center",
        padding : "10px"
   
}
export default Header;