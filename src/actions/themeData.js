import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddThemeData(payload) {
  return {
    type: TYPE.THEME_ADD_DATA,
    payload,
  };
}

export function RemoveThemeData(id, statusLoading) {
  return dispatch => {
    dispatch(AddThemeData);
    return deleteData(PATH.THEME, id, statusLoading).then(() => {
      return {
        type: TYPE.THEME_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateThemeData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddThemeData);
    return postData(PATH.THEME, payload, statusLoading).then(() => {
      return {
        type: TYPE.THEME_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeThemeData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddThemeData);
    return putData(PATH.THEME, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.THEME_CHANGE_DATA,
        payload,
      };
    });
  };
}