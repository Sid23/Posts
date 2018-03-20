// Define actions used by action reducer
// each action has its own type to be identified and its payload (useful data)
import {PostActions} from "./actionTypes"

export function addPost(post) {
    return {
        type: PostActions.ADD_POST,
        payload: post
    };
}

export function selectPost(post) {
    return {
        type: PostActions.SELECT_POST,
        payload: post
    };
}

export function removePost(postId) {
    // Take as argument just the id of the post we want delete
    return {
        type: PostActions.REMOVE_POST,
        payload: postId
    };
}