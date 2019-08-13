import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addThemeData(payload) {
  return {
    type: TYPE.THEME_ADD_DATA,
    payload,
  };
}

export function removeThemeData(id, statusLoading) {
  return dispatch => {
    dispatch(addThemeData);
    return deleteData(PATH.THEME, id, statusLoading).then(() => {
      return {
        type: TYPE.THEME_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createThemeData(payload, statusLoading) {
  return dispatch => {
    dispatch(addThemeData);
    return postData(PATH.THEME, payload, statusLoading).then(() => {
      return {
        type: TYPE.THEME_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeThemeData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addThemeData);
    return putData(PATH.THEME, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.THEME_CHANGE_DATA,
        payload,
      };
    });
  };
}