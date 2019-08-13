import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addSkillData(payload) {
  return {
    type: TYPE.SKILL_ADD_DATA,
    payload,
  };
}

export function removeSkillData(id, statusLoading) {
  return dispatch => {
    dispatch(addSkillData);
    return deleteData(PATH.SKILLPATH, id, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createSkillData(payload, statusLoading) {
  return dispatch => {
    dispatch(addSkillData);
    return postData(PATH.SKILLPATH, payload, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeSkillData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addSkillData);
    return putData(PATH.SKILLPATH, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.SKILL_CHANGE_DATA,
        payload,
      };
    });
  };
}
