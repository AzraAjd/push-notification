import { combineReducers } from 'redux';
import notificationReducer from './notification-push';
import test from './test'

export default combineReducers({
    message: notificationReducer,
    testie: test
});