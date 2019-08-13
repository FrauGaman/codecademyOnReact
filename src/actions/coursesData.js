import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function addCoursesData(payload) {
  return {
    type: TYPE.COURSES_ADD_DATA,
    payload,
  };
}

export function removeCoursesData(id, statusLoading) {
  return dispatch => {
    dispatch(addCoursesData);
    return deleteData(PATH.COURSESLIST, id, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function createCoursesData(payload, statusLoading) {
  return dispatch => {
    dispatch(addCoursesData);
    return postData(PATH.COURSESLIST, payload, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_CREATE_DATA,
        payload,
      };
    });
  };
}

export function changeCoursesData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(addCoursesData);
    return putData(PATH.COURSESLIST, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_CHANGE_DATA,
        payload,
      };
    });
  };
}
