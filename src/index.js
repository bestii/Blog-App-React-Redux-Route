import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
// BrowserRouter Interacts with the history library
import promise from 'redux-promise';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostNew from './components/post_new';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// '/'--->matches any route that starts with /
/* Switch component is used to render a single component out of a number of components 
   that match the route based on priority(the one that comes first has higher prriority)
*/
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} /> 
          <Route path="/" component={PostIndex} />   
        </Switch>    
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
