import { combineReducers } from 'redux';
import careerTasks from './careerTasks';

const rootReducer = combineReducers({
  careerTasks,
});

export default rootReducer;
