import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import activeUser from './activeUser';

export default combineReducers({
    users,
    questions,
    activeUser
})