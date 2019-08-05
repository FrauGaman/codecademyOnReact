import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddKnowledgeData(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function RemoveKnowledgeData(id) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return deleteData(PATH.KNOWLEDGE, id).then(() => {
      return {
        type: TYPE.KNOWLEDGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateKnowledgeData(payload) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return postData(PATH.KNOWLEDGE, payload).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeKnowledgeData(state, payload) {
  state.data.map(item => {
    item.id === payload.id && putData(PATH.KNOWLEDGE, item.id, payload);
  },
  );
  return {
    type: TYPE.KNOWLEDGE_CHANGE_DATA,
    payload,
  };
}
