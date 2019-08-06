import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddKnowledgeData(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function RemoveKnowledgeData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return deleteData(PATH.KNOWLEDGE, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.KNOWLEDGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateKnowledgeData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return postData(PATH.KNOWLEDGE, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeKnowledgeData(state, payload, setGetDataStatus) {
  state.data.map(item => item.id === payload.id && putData(PATH.KNOWLEDGE, item.id, payload, setGetDataStatus));
  return {
    type: TYPE.KNOWLEDGE_CHANGE_DATA,
    payload,
  };
}
