import { TYPE } from '../scripts/const';

const languageTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.LANGUAGE_ADD_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.LANGUAGE_REMOVE_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_LANGUAGE_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.CHANGE_LANGUAGE_DATA:
      state.map(item =>{
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

export default languageTasks;
