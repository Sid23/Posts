import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Panel, Button } from 'react-bootstrap';

import { removePost } from "../actions/posts";

class PostDetails extends Component {
    
    render () {
        if (this.props.selectedPost) {
            return (
                <div>
                    <Panel bsStyle="success">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">{ this.props.selectedPost.title }</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>{ this.props.selectedPost.body }</Panel.Body>
                    </Panel>
                    <Button bsStyle="danger" onClick={ () => { this.props.removePost(this.props.selectedPost.id) } }>
                        Delete This Post
                    </Button>
                </div>
            )
        } else {
            return (
                <p>Select a post to view its details...</p>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        // Application state posts are mapped to posts
        selectedPost: state.activePost
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removePost: (postId) => dispatch(removePost(postId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);