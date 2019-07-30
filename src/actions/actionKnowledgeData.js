import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function KNOWLEDGE_ADD_DATA(payload) {
  return {
    type: TYPE.KNOWLEDGE_ADD_DATA,
    payload,
  };
}

export function KNOWLEDGE_REMOVE_DATA(id) {
  fetch(`${BASE_PATH}${PATH.KNOWLEDGE}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.KNOWLEDGE_REMOVE_DATA,
    payload: { id },
  };
}

export function KNOWLEDGE_CREATE_DATA(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.KNOWLEDGE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        name: item.name,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }),
  );
  return {
    type: TYPE.KNOWLEDGE_CREATE_DATA,
    payload,
  };
}

export function KNOWLEDGE_CHANGE_DATA(state, payload) {
  state.data.map(item =>
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
    type: TYPE.KNOWLEDGE_CHANGE_DATA,
    payload,
  };
}
