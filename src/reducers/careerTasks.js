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
    case TYPE.CHANGE_CAREER_DATA:
      state.map(item => {
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
