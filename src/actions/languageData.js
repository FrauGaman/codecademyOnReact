import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddLanguageData(payload) {
  return {
    type: TYPE.LANGUAGE_ADD_DATA,
    payload,
  };
}

export function RemoveLanguageData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddLanguageData);
    return deleteData(PATH.LANGUAGE, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.LANGUAGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateLanguageData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddLanguageData);
    return postData(PATH.LANGUAGE, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.LANGUAGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeLanguageData(state, payload, setGetDataStatus) {
  state.data.map(item => item.id === payload.id && putData(PATH.LANGUAGE, item.id, payload, setGetDataStatus));
  return {
    type: TYPE.LANGUAGE_CHANGE_DATA,
    payload,
  };
}
