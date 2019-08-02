import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddKnowledgeData(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function RemoveKnowledgeData(id) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return fetch(`${BASE_PATH}${PATH.KNOWLEDGE}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.KNOWLEDGE_REMOVE_DATA,
        payload: { id },
      }
    });
  };
}

export function CreateKnowledgeData(payload) {
  return dispatch => {
    dispatch(AddKnowledgeData);
    return fetch(`${BASE_PATH}${PATH.KNOWLEDGE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.KNOWLEDGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeKnowledgeData(state, payload) {
  state.data.map(item =>
    item.id === payload.id &&
      fetch(`${BASE_PATH}${PATH.KNOWLEDGE}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: payload.name,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }),
  );
  return {
    type: TYPE.KNOWLEDGE_CHANGE_DATA,
    payload,
  };
}
