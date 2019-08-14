import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import careerTasks from './careerTasks';
import skillTasks from './skillTasks';
import coursesTasks from './coursesTask';
import themeTasks from './themeTasks';
import languageTask from './languageTasks';
import knowledgeTask from './knowledgeTask';
import dataStatusTasks from './dataStatusTasks';
import userStatusTasks from './userTasks';

const rootReducer = combineReducers({
  careerTasks,
  skillTasks,
  coursesTasks,
  themeTasks,
  languageTask,
  knowledgeTask,
  dataStatusTasks,
  userStatusTasks,
  form: formReducer,
});

export default rootReducer;
