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