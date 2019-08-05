import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddLanguageData(payload) {
  return {
    type: TYPE.LANGUAGE_ADD_DATA,
    payload,
  };
}

export function RemoveLanguageData(id) {
  return dispatch => {
    dispatch(AddLanguageData);
    return deleteData(PATH.LANGUAGE, id).then(() => {
      return {
        type: TYPE.LANGUAGE_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateLanguageData(payload) {
  return dispatch => {
    dispatch(AddLanguageData);
    return postData(PATH.LANGUAGE, payload).then(() => {
      return {
        type: TYPE.LANGUAGE_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeLanguageData(state, payload) {
  let body = {};
  state.data.map(item => {
    item.id === payload.id &&
    (body = {
      name: payload.name,
      descr: payload.descr,
      link: payload.link,
    });
    putData(PATH.LANGUAGE, item.id, body);
  });
  return {
    type: TYPE.LANGUAGE_CHANGE_DATA,
    payload,
  };
}
