// React and Redux imports
import React, { Component } from 'react';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';

// Some bootstrap imports to manage UI
import { Grid, Row, Col } from 'react-bootstrap';

// Import of Application Components
import './App.css';
import PostCreator from './components/postCreator'
import PostList from './components/postList'
import PostDetails from './components/postDetails'

// Imports application reducer, that is the combination of all reducers
//import reducers from './reducers';
import PostsReducer from './reducers/posts'
 
// Redux Store creation (Application state), it need to know about reducers, since they can modify the state
const store = createStore(PostsReducer)

class App extends Component {
  
  render() {
    return (
      // Allow app to use previous created redux store
      <Provider store={store}>
        <div>
          <h1 align="center" style={{fontSize: 40}}>Make your own Post !!</h1>
          <hr /> <br />
          <PostCreator />
          <hr /> <br />

          <Grid>
            <Row className="show-grid"> 
              <Col md={6} mdPush={6}>
                
              <PostDetails />

              </Col>
              <Col md={6} mdPull={6}>
              
                <PostList />

              </Col>
            </Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
