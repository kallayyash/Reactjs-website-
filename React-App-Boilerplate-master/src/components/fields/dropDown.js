import React, {Component} from 'react';

class Dropdown extends Component{
  
    render(){
      
    return(

        <div>
        <select>
         <option value="--Dropdown--">--Select City--</option>
         <option value = "Bangalore">Bangalore</option>
         <option value = "Mumbai">Mumbai</option>
         <option value = "Pune">Pune</option>
        </select>
        </div>
    );

    }

}
export default Dropdown;