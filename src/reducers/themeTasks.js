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
    case TYPE.CREATE_THEME_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default themeTasks;
