import { TYPE } from '../scripts/const';

const languageTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_LANGUAGE_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_LANGUAGE_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_LANGUAGE_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;

  }
};

export default languageTasks;
