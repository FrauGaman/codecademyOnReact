import { combineReducers } from 'redux';
import careerTasks from './careerTasks';
import skillTasks from './skillTasks';
import coursesTasks from './coursesTask';
import themeTasks from './themeTasks';
import languageTask from './languageTask';

const rootReducer = combineReducers({
  careerTasks,
  skillTasks,
  coursesTasks,
  themeTasks,
  languageTask,
});

export default rootReducer;
