import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../action';
class PostShow extends Component {
    componentDidMount() {
        // React router passes URL param information as the props to the component that is rendered on that route.
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        return (
            <div>
                Show Post!
            </div>
        );
    }
}

// OwnProps points to components currently existing props
function mapStateToProps({ posts }, OwnProps) {
    return { post: posts[OwnProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostShow);