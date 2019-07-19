import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddLanguageData(payload) {
  return {
    type: TYPE.ADD_LANGUAGE_DATA,
    payload,
  };
}

export function RemoveLanguageData(id) {
  fetch (`${BASE_PATH}${PATH.LANGUAGE}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_LANGUAGE_DATA,
    payload: {id},
  }
}