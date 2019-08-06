import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddSkillData(payload) {
  return {
    type: TYPE.SKILL_ADD_DATA,
    payload,
  };
}

export function RemoveSkillData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddSkillData);
    return deleteData(PATH.SKILLPATH, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.SKILL_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateSkillData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddSkillData);
    return postData(PATH.SKILLPATH, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.SKILL_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeSkillData(state, payload, setGetDataStatus) {
  state.data.map(item => item.id === payload.id && putData(PATH.SKILLPATH, item.id, payload, setGetDataStatus));
  return {
    type: TYPE.SKILL_CHANGE_DATA,
    payload,
  };
}
