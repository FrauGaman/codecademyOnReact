import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddCoursesData(payload) {
  return {
    type: TYPE.ADD_COURSES_DATA,
    payload,
  };
}

export function RemoveCoursesData(id) {
  fetch (`${BASE_PATH}${PATH.COURSESLIST}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_COURSES_DATA,
    payload: {id},
  }
}