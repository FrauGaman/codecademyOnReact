import { TYPE } from '../scripts/const';

const coursesTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_COURSES_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_COURSES_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_COURSES_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.CHANGE_COURSES_DATA:
      state.map(item => {
        if (item.id === action.payload.id) {
          item.importance = action.payload.importance;
          item.title = action.payload.title;
          item.descr = action.payload.descr;
          item.icon = action.payload.icon;
          item.borderColor = action.payload.borderColor;
          item.theme = action.payload.theme;
          item.language = action.payload.language;
        }
      });
      return state;
    default:
      return state;
  }
};

export default coursesTasks;
