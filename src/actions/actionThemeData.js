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