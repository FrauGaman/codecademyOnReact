import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddCareerData(payload) {
  return {
    type: TYPE.CAREER_ADD_DATA,
    payload,
  };
}

export function RemoveCareerData(id, statusLoading) {
  return dispatch => {
    dispatch(AddCareerData);
    return deleteData(PATH.CAREERPATH, id, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCareerData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddCareerData);
    return postData(PATH.CAREERPATH, payload, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeCareerData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddCareerData);
    return putData(PATH.CAREERPATH, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.CAREER_CHANGE_DATA,
        payload,
      };
    });
  };
}
