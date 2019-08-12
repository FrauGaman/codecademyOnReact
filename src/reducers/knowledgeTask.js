import { TYPE } from '../scripts/const';

const knowledgeTasks = (state = { data: [], count: '0' }, action) => {
  switch (action.type) {
    case TYPE.KNOWLEDGE_ADD_DATA:
      return {
        data: action.payload.data,
        count: action.payload.count,
      };
    case TYPE.KNOWLEDGE_REMOVE_DATA:
      return {
        data: [...state.data].filter((item) => item.id !== action.payload.id),
        count: (state.count > 0) && state.count - 1,
      };
    case TYPE.KNOWLEDGE_CREATE_DATA:
      return {
        data: [...state.data, ...action.payload],
        count: action.payload.count,
      };
    case TYPE.KNOWLEDGE_CHANGE_DATA:
      state.data.map(item =>
        (item.id === action.payload.id) && (item.name = action.payload.name),
      );
      return state;
    default:
      return state;
  }
};

export default knowledgeTasks;
