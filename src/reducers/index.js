import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-from';
import PostReducer from './reducer_posts';


const rootReducer = combineReducers({
    posts: PostReducer,
    form: formReducer
});

export default rootReducer;
