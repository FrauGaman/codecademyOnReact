import { TYPE } from '../scripts/const';

const knowledgeTasks = (state = [], action) => {
  switch (action.type) {
    case TYPE.ADD_KNOWLEDGE_DATA:
      state = [];
      return [
        ...state,
        ...action.payload,
      ];
    case TYPE.REMOVE_KNOWLEDGE_DATA:
      return [...state].filter((item) => item.id !== action.payload.id);
    case TYPE.CREATE_KNOWLEDGE_DATA:
      return [
        ...state,
        ...action.payload,
      ];
      // case TYPE.CHANGE_KNOWLEDGE_DATA
    default:
      return state;
  }
};

export default knowledgeTasks;
