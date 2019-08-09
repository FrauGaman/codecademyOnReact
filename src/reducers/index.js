import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import careerTasks from './careerTasks';
import skillTasks from './skillTasks';
import coursesTasks from './coursesTask';
import themeTasks from './themeTasks';
import languageTask from './languageTasks';
import knowledgeTask from './knowledgeTask';
import dataStatusTasks from './dataStatusTasks';

const rootReducer = combineReducers({
  careerTasks,
  skillTasks,
  coursesTasks,
  themeTasks,
  languageTask,
  knowledgeTask,
  dataStatusTasks,
  form: formReducer,
});

export default rootReducer;
