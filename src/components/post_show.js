import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
class PostShow extends Component {
    componentDidMount() {
        // React router passes URL param information as the props to the component that is rendered on that route.
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    render() {
        const { post } = this.props;

        /* Initially when the component renders post will be undefined 
           since componentDidMount is executed after first render */
        if(!post){
            return (
                <div>
                    Loading....
                </div>
            );
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// OwnProps points to components currently existing props
function mapStateToProps({ posts }, OwnProps) {
    return { post: posts[OwnProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostShow);