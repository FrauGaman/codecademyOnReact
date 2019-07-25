import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddKnowledgeData(payload) {
  return {
    type: TYPE.ADD_KNOWLEDGE_DATA,
    payload,
  };
}

export function RemoveKnowledgeData(id) {
  fetch(`${BASE_PATH}${PATH.KNOWLEDGE}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_KNOWLEDGE_DATA,
    payload: { id },
  };
}

export function CreateKnowledgeData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.KNOWLEDGE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        name: item.name,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  return {
    type: TYPE.CREATE_KNOWLEDGE_DATA,
    payload,
  };
}

export function ChangeKnowledgeData(state, payload) {
  state.map(item =>
    item.id === payload.id ?
      fetch(`${BASE_PATH}${PATH.KNOWLEDGE}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: payload.name,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }) : '',
  );
  return {
    type: TYPE.CHANGE_KNOWLEDGE_DATA,
    payload,
  }
}