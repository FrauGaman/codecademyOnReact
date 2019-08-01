import { TYPE } from '../scripts/const';

const skillTasks = (state = {}, action) => {
  switch (action.type) {
    case TYPE.ADD_SKILL_DATA:
      return {
        data: action.payload.data,
        count: action.payload.count,
      };
    case TYPE.REMOVE_SKILL_DATA:
      return {
        data: [...state.data].filter((item) => item.id !== action.payload.id),
        count: (state.count > 0) && state.count - 1,
      };
    case TYPE.CREATE_SKILL_DATA:
      return {
        data: [...state.data, ...action.payload],
        count: action.payload.count,
      };
    case TYPE.CHANGE_SKILL_DATA:
      state.data.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.descr = action.payload.descr;
          item.img = action.payload.img;
          item.bgColor = action.payload.bgColor;
          item.period = action.payload.period;
          item.theme = action.payload.theme;
          item.language = action.payload.language;
        }
      });
      return state;
    default:
      return state;
  }
};

export default skillTasks;
