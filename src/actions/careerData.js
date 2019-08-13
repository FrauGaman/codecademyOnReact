import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addCareerData(payload) {
  return {
    type: TYPE.CAREER_ADD_DATA,
    payload,
  };
}

export function removeCareerData(id, statusLoading) {
  return dispatch => {
    dispatch(addCareerData);
    return deleteData(PATH.CAREERPATH, id, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createCareerData(payload, statusLoading) {
  return dispatch => {
    dispatch(addCareerData);
    return postData(PATH.CAREERPATH, payload, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeCareerData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addCareerData);
    return putData(PATH.CAREERPATH, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_CHANGE_DATA,
        payload,
      };
    });
  };
}
