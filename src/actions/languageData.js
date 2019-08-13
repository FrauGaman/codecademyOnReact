import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addLanguageData(payload) {
  return {
    type: TYPE.LANGUAGE_ADD_DATA,
    payload,
  };
}

export function removeLanguageData(id, statusLoading) {
  return dispatch => {
    dispatch(addLanguageData);
    return deleteData(PATH.LANGUAGE, id, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createLanguageData(payload, statusLoading) {
  return dispatch => {
    dispatch(addLanguageData);
    return postData(PATH.LANGUAGE, payload, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeLanguageData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addLanguageData);
    return putData(PATH.LANGUAGE, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_CHANGE_DATA,
        payload,
      };
    });
  };
}
