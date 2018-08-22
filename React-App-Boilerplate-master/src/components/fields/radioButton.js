import React, {Component} from 'react';

class RadioButton extends Component{
   
    render(){
      
    return(

        <div>
        <input type ="radio" value="Male" name="gender"/>Male
        <input type ="radio" value="FeMale" name="gender"/>FeMale
        </div>
    );

    }

}
export default RadioButton;