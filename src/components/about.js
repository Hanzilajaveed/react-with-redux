import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.userName}</h1>
                <Link to='/'>Go to home</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName
    })
}

function mapDispatchToProps(dispatch){
    return({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(About);
// export default About;


