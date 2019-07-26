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
    case TYPE.CHANGE_THEME_DATA:
      state.map(item => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.descr = action.payload.descr;
          item.link = action.payload.link;
        }
      });
      return state;
    default:
      return state;
  }
};

export default themeTasks;
