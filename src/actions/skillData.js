import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddSkillData(payload) {
  return {
    type: TYPE.SKILL_ADD_DATA,
    payload,
  };
}

export function RemoveSkillData(id, statusLoading) {
  return dispatch => {
    dispatch(AddSkillData);
    return deleteData(PATH.SKILLPATH, id, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateSkillData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddSkillData);
    return postData(PATH.SKILLPATH, payload, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeSkillData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddSkillData);
    return putData(PATH.SKILLPATH, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_CHANGE_DATA,
        payload,
      };
    });
  };
}
