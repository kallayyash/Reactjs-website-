import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(

            <div>
             <footer style={footer}>
             First Data &copy; 2018     
             </footer>  

            </div>
        );
    }
}

const footer={
   
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "#004165",
        color: "white",
        textAlign: "center",
        padding : "10px"
   
}
export default Footer;