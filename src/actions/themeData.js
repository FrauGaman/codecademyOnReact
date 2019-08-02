import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddThemeData(payload) {
  return {
    type: TYPE.THEME_ADD_DATA,
    payload,
  };
}

export function RemoveThemeData(id) {
  return dispatch => {
    dispatch(AddThemeData);
    return fetch(`${BASE_PATH}${PATH.THEME}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.THEME_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateThemeData(payload) {
  return dispatch => {
    dispatch(AddThemeData);
    return fetch(`${BASE_PATH}${PATH.THEME}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.THEME_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeThemeData(state, payload) {
  state.data.map(item =>
    item.id === payload.id &&
      fetch(`${BASE_PATH}${PATH.THEME}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: payload.name,
          descr: payload.descr,
          link: payload.link,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }),
  );
  return {
    type: TYPE.THEME_CHANGE_DATA,
    payload,
  };
}
