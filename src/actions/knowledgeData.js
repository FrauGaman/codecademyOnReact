import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addKnowledgeData(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function removeKnowledgeData(id, statusLoading) {
  return dispatch => {
    dispatch(addKnowledgeData);
    return deleteData(PATH.KNOWLEDGE, id, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createKnowledgeData(payload, statusLoading) {
  return dispatch => {
    dispatch(addKnowledgeData);
    return postData(PATH.KNOWLEDGE, payload, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeKnowledgeData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addKnowledgeData);
    return putData(PATH.KNOWLEDGE, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CHANGE_DATA,
        payload,
      };
    });
  };
}
