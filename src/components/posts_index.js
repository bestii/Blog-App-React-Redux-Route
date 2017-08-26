import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class PostsIndex extends Component {
    //This function is called right after the Component is rendered on the screen
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts(){
        // Cannot directly use looping as its not an array so we are using lodash map funtion
        return _.map(this.props.posts,post=>{
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-item-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { posts: state.posts };
}
//Shortcut to wireup using connect
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
