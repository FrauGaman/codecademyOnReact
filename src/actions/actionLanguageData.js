import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function LANGUAGE_ADD_DATA(payload) {
  return {
    type: TYPE.LANGUAGE_ADD_DATA,
    payload,
  };
}

export function LANGUAGE_REMOVE_DATA(id) {
  return dispatch => {
    dispatch(LANGUAGE_ADD_DATA);
    return fetch(`${BASE_PATH}${PATH.LANGUAGE}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.LANGUAGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateLanguageData(payload) {
  return dispatch => {
    dispatch(LANGUAGE_ADD_DATA);
    return fetch(`${BASE_PATH}${PATH.LANGUAGE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.CREATE_LANGUAGE_DATA,
        payload,
      };
    });
  };
}

export function ChangeLanguageData(state, payload) {
  state.data.map(item =>
    item.id === payload.id ?
      fetch(`${BASE_PATH}${PATH.LANGUAGE}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: payload.name,
          descr: payload.descr,
          link: payload.link,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }) : '',
  );
  return {
    type: TYPE.CHANGE_LANGUAGE_DATA,
    payload,
  };
}
