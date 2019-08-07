import { PATH, TYPE } from '../scripts/const';
import {deleteData, postData, putData} from '../scripts/changeData';

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

export function ChangeThemeData(state, payload, setGetDataStatus) {
  state.data.map(item => item.id === payload.id && putData(PATH.THEME, item.id, payload, setGetDataStatus));
  return {
    type: TYPE.THEME_CHANGE_DATA,
    payload,
  };
}
