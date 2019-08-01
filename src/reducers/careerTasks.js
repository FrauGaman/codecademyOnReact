import { TYPE } from '../scripts/const';

const careerTasks = (state = {}, action) => {
  switch (action.type) {
    case TYPE.ADD_CAREER_DATA:
      return {
        data: action.payload.data,
        count: action.payload.count,
      };
    case TYPE.REMOVE_CAREER_DATA:
      return {
        data: [...state.data].filter((item) => item.id !== action.payload.id),
        count: (state.count > 0) && state.count - 1,
      };
    case TYPE.CREATE_CAREER_DATA:
      return {
        data: [...state.data, ...action.payload],
        count: action.payload.count,
      };
    case TYPE.CHANGE_CAREER_DATA:
      state.data.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.descr = action.payload.descr;
          item.img = action.payload.img;
          item.bgColor = action.payload.bgColor;
          item.theme = action.payload.theme;
          item.language = action.payload.language;
          item.knowledge = action.payload.knowledge;
        }
      });
      return state;
    default:
      return state;
  }
};

export default careerTasks;
