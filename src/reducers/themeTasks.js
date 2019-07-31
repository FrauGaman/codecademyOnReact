import { TYPE } from '../scripts/const';

const themeTasks = (state = {}, action) => {
  switch (action.type) {
    case TYPE.ADD_THEME_DATA:
      return {
        data: action.payload.data,
        count: action.payload.count,
      };
    case TYPE.REMOVE_THEME_DATA:
      return {
        data: [...state.data].filter((item) => item.id !== action.payload.id),
        count: (state.count > 0) && state.count - 1,
      }
    case TYPE.CREATE_THEME_DATA:
      return {
        data: [...state.data, ...action.payload],
        count: action.payload.count,
      };
    case TYPE.CHANGE_THEME_DATA:
      state.data.map(item => {
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
