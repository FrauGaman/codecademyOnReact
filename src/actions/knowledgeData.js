import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddKnowledgeData(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function RemoveKnowledgeData(id, statusLoading) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return deleteData(PATH.KNOWLEDGE, id, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateKnowledgeData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return postData(PATH.KNOWLEDGE, payload, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeKnowledgeData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return putData(PATH.KNOWLEDGE, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CHANGE_DATA,
        payload,
      };
    });
  };
}
