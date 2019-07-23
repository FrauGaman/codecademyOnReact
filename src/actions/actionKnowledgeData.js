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
        id: item.id,
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