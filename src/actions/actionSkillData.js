import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddSkillData(payload) {
  return {
    type: TYPE.ADD_SKILL_DATA,
    payload,
  };
}

export function RemoveSkillData(id) {
  fetch (`${BASE_PATH}${PATH.SKILLPATH}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_SKILL_DATA,
    payload: {id},
  }
}
