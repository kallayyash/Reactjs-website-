import React, {Component} from 'react';

class UserInputs extends Component{
    handle () {
        console.log("Hi...!");
    }
    render(){
      
    return(

        <div><input type="text" placeholder="InputId" maxLength="3" onChange = {this.handle.bind(this)}/>
      
        
        </div>
    );

    }

}
export default UserInputs;