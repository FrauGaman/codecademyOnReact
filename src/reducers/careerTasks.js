import { TYPE } from '../scripts/const';

const careerTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_CAREER_DATA:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default careerTasks;
