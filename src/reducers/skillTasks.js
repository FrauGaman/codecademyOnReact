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
      return [...state].filter(item => item.id !== action.payload.id);
    case TYPE.CREATE_SKILL_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.CHANGE_SKILL_DATA:
      state.map(item => {
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
