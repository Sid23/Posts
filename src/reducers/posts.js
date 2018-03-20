
import { PostActions } from "../actions/actionTypes"

const initialState = {
    posts: [],
    activePost: null,
    lastPostId: 0
}

export default function PostsReducer(state = initialState, action) {

    // Clone the current state
    let clonedState = {...state};

    switch(action.type){
        
        case PostActions.ADD_POST:
            // Deep Copy of the entire post array (otherwise just copy the reference)
            clonedState.posts = state.posts.slice(0);
            // New post creation using
            let newPost = {id: clonedState.lastPostId++,
                           title: action.payload.title,
                           body: action.payload.body};

            // Add the action payload to the state, the new post to add in this case
            clonedState.posts.push(newPost);
            // Returns the new state
            return clonedState;
        
        case PostActions.SELECT_POST:
            // Set the active post as the selected one
            clonedState.activePost = action.payload
            return clonedState;

        case PostActions.REMOVE_POST:
            // Filter method creates a new array, without the element we want delete
            clonedState.posts = state.posts.filter(el => el.id !== action.payload)
            clonedState.activePost = null;
            return clonedState;

        default:
    }

    return state
}
