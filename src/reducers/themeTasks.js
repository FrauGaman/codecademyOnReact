import { TYPE } from '../scripts/const';

const themeTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_THEME_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_THEME_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default themeTasks;
