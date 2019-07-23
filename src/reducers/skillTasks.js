import { TYPE } from '../scripts/const';

const skillTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_SKILL_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_SKILL_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_SKILL_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default skillTasks;
