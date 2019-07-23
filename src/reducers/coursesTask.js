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
    default:
      return state;
  }
};

export default coursesTasks;
