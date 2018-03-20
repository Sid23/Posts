import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

class PostDetails extends Component {
    
    render () {
        if (this.props.selectedPost) {
            return (
                <Panel bsStyle="success">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{ this.props.selectedPost.title }</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>{ this.props.selectedPost.body }</Panel.Body>
                </Panel>
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

export default connect(mapStateToProps, null)(PostDetails);