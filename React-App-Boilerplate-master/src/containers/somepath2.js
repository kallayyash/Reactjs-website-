import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './../components/buttons/Button'
class somepath2 extends Component{

    goBack =()=>{
        {this.props.history.push("/");}
    }

    render(){
        return(
            <div style={{textAlign:"center",color:"red",fontFamily:"sans-serif",fontSize:"25px", border: "2px solid #1d1da0fa",lineHeight : "1.5",width:"317px",  margin: "144px auto",padding:"20px"}}>
                  Congratulations <br/>
                  Enrollment <br/>
                  update is complete.
                  <br/>
                  <Button />
            </div>
        );
    }
}

const mapStateToProps = State =>({

});

const mapStateToDispatch = Dispatch =>({

});

export default connect (mapStateToProps,mapStateToDispatch)(somepath2);