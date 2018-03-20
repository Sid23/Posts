import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { selectPost } from "../actions/posts";

class PostList extends Component {

    renderList () {
        return this.props.posts.map((post) => {
            return (
                <ListGroupItem header={ post.title }
                                key={ post.id }
                                onClick={ () => { this.props.selectPost(post) } }>
                    {post.body}
                </ListGroupItem>
            );
        });
    }

    render () {
        return (
            <ListGroup>
                {this.renderList()}
            </ListGroup>
        )
    }
}

function mapStateToProps(state) {
    return {
        // Application state posts are mapped to posts
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        selectPost: (post) => dispatch(selectPost(post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);