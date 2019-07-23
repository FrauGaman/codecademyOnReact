import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddThemeData(payload) {
  return {
    type: TYPE.ADD_THEME_DATA,
    payload,
  };
}

export function RemoveThemeData(id) {
  fetch(`${BASE_PATH}${PATH.THEME}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_THEME_DATA,
    payload: { id },
  };
}

export function CreateThemeData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.THEME}`, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        descr: item.descr,
        link: item.link,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  return {
    type: TYPE.CREATE_THEME_DATA,
    payload,
  };
}