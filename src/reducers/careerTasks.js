import { TYPE } from '../scripts/const';

const careerTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_CAREER_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_CAREER_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_CAREER_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default careerTasks;
