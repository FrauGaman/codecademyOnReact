import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddCareerData(payload) {
  return {
    type: TYPE.CAREER_ADD_DATA,
    payload,
  };
}

export function RemoveCareerData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddCareerData);
    return deleteData(PATH.CAREERPATH, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.CAREER_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCareerData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddCareerData);
    return postData(PATH.CAREERPATH, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.CAREER_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeCareerData(state, payload, setGetDataStatus) {
  state.data.map(item => item.id === payload.id && putData(PATH.CAREERPATH, item.id, payload, setGetDataStatus));
  return {
    type: TYPE.CAREER_CHANGE_DATA,
    payload,
  };
}
