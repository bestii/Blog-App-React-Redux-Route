import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostsIndex extends Component {
    //This function is called right after the Component is rendered on the screen
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);
        return (
            <div>
                Posts Index
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { posts: state.posts };
}
//Shortcut to wireup using connect
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
