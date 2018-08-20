import React, {Component} from 'react';
import {connect} from 'react-redux';

class somepath1 extends Component{

    goBack =()=>{
        {this.props.history.push("/");}
    }

    render(){
        return(
            <div>Hi am somepath1</div>
        );
    }
}

const mapStateToProps = State =>({

});

const mapStateToDispatch = Dispatch =>({

});

export default connect (mapStateToProps,mapStateToDispatch)(somepath1);