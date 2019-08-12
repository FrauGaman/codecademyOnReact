import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddCoursesData(payload) {
  return {
    type: TYPE.COURSES_ADD_DATA,
    payload,
  };
}

export function RemoveCoursesData(id, statusLoading) {
  return dispatch => {
    dispatch(AddCoursesData);
    return deleteData(PATH.COURSESLIST, id, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCoursesData(payload, statusLoading) {
  return dispatch => {
    dispatch(AddCoursesData);
    return postData(PATH.COURSESLIST, payload, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeCoursesData(id, state, payload, statusLoading) {
  return dispatch => {
    dispatch(AddCoursesData);
    return putData(PATH.COURSESLIST, id, payload, statusLoading).then(() => {
      return {
        type: TYPE.COURSES_CHANGE_DATA,
        payload,
      };
    });
  };
}
