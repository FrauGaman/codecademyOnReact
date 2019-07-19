import { BASE_PATH, PATH, TYPE } from '../scripts/const';


export function AddCareerData(payload) {
  return {
    type: TYPE.ADD_CAREER_DATA,
    payload,
  };
}

export function RemoveCareerData(id) {
  fetch (`${BASE_PATH}${PATH.CAREERPATH}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_CAREER_DATA,
    payload: {id},
  }
}