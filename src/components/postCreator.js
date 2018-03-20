import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';

import { addPost } from "../actions/posts";

class PostCreator extends Component {

    constructor(props) {
        super(props);

        // Component state
        this.state = {title: "", body: ""};
    }

    updatePostTitle = (event) => {
        this.setState({title: event.target.value});
    };

    updatePostBody = (event) => {
        this.setState({body: event.target.value});
    };

    savePost = () => {
        this.props.createPost(this.state);
    };

    render () {
        return (
            <Form horizontal>
                <FormGroup controlId="postTitle">
                    <Col componentClass={ControlLabel} sm={2}>
                    Post title:
                    </Col>
                    <Col sm={9}>
                    <FormControl type="text"
                        placeholder="Write your post title..." maxLength="80" bsSize="large" value={this.state.postTitle}
                        onChange={this.updatePostTitle}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Description
                    </Col>
                    <Col sm={9}>
                    <FormControl componentClass="textarea" style={{ height: 200 }}
                        placeholder="Write the content of your post..." value={this.state.postBody}
                        onChange={this.updatePostBody}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={9}>
                    <Button type="button" onClick={this.savePost} bsStyle="primary">Save Post</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (post) => dispatch(addPost(post))
    };
}

// First parameter to nul means mapStateToProps and the second one is used to modify the state
export default connect(null, mapDispatchToProps)(PostCreator);