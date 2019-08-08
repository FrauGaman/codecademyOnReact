import { PATH, TYPE } from '../scripts/const';
import {deleteData, postData, putData} from '../scripts/changeData';
import {AddLanguageData} from './languageData';

export function AddThemeData(payload) {
  return {
    type: TYPE.THEME_ADD_DATA,
    payload,
  };
}

export function RemoveThemeData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddThemeData);
    return deleteData(PATH.THEME, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.THEME_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateThemeData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddThemeData);
    return postData(PATH.THEME, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.THEME_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeThemeData(id, state, payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddThemeData);
    return putData(PATH.THEME, id, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.THEME_CHANGE_DATA,
        payload,
      };
    });
  };
}