import {combineReducers} from 'redux';
import AddStudentReducer from './StudentReducer';

const AllReducer = combineReducers({
    students: AddStudentReducer
})

export default AllReducer