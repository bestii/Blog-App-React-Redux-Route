import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../action';
class PostShow extends Component{
    componentDidMount(){
        //this.props.match.params.id;
        this.props.fetchPost();
    }
    render(){
        return (
            <div>
                Show Post!
            </div>
        );
    }
}

function mapStateToProps({ posts }){

}

export default connect(null, { fetchPost })(PostShow);