import { TYPE } from '../scripts/const';

const knowledgeTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.KNOWLEDGE_ADD_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.KNOWLEDGE_REMOVE_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.KNOWLEDGE_CREATE_DATA:
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.KNOWLEDGE_CHANGE_DATA:
      state.map(item =>
        item.id === action.payload.id ?
          item.name = action.payload.name : '',
      );
      return state;
    default:
      return state;
  }
};

export default knowledgeTasks;
