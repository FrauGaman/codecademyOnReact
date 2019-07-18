import { TYPE } from '../scripts/const';

export function AddCareerData(payload) {
  return {
    type: TYPE.ADD_CAREER_DATA,
    payload,
  };
}
