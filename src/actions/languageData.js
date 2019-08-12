import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddLanguageData(payload) {
  return {
    type: TYPE.LANGUAGE_ADD_DATA,
    payload,
  };
}

export function RemoveLanguageData(id, statusLoading) {
  return dispatch => {
    dispatch(AddLanguageData);
    return deleteData(PATH.LANGUAGE, id, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateLanguageData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddLanguageData);
    return postData(PATH.LANGUAGE, payload, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeLanguageData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddLanguageData);
    return putData(PATH.LANGUAGE, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.LANGUAGE_CHANGE_DATA,
        payload,
      };
    });
  };
}
