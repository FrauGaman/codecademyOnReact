import { TYPE } from '../scripts/const';

const languageTasks = (state = {data: [], count: '0'}, action) => {
  switch (action.type) {
    case TYPE.LANGUAGE_ADD_DATA:
      return {
        data: action.payload.data,
        count: action.payload.count,
      };
    case TYPE.LANGUAGE_REMOVE_DATA:
      return {
        data: [...state.data].filter((item) => item.id !== action.payload.id),
        count: (state.count > 0) && state.count - 1,
      };
    case TYPE.LANGUAGE_CREATE_DATA:
      return {
        data: [...state.data, ...action.payload],
        count: action.payload.count,
      };
    case TYPE.LANGUAGE_CHANGE_DATA:
      state.data.map(item =>{
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
