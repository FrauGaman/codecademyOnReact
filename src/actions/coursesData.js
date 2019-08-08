import { PATH, TYPE } from '../scripts/const';
import { deleteData, postData, putData } from '../scripts/changeData';

export function AddCoursesData(payload) {
  return {
    type: TYPE.COURSES_ADD_DATA,
    payload,
  };
}

export function RemoveCoursesData(id, setGetDataStatus) {
  return dispatch => {
    dispatch(AddCoursesData);
    return deleteData(PATH.COURSESLIST, id, setGetDataStatus).then(() => {
      return {
        type: TYPE.COURSES_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCoursesData(payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddCoursesData);
    return postData(PATH.COURSESLIST, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.COURSES_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeCoursesData(id, state, payload, setGetDataStatus) {
  return dispatch => {
    dispatch(AddCoursesData);
    return putData(PATH.COURSESLIST, id, payload, setGetDataStatus).then(() => {
      return {
        type: TYPE.COURSES_CHANGE_DATA,
        payload,
      };
    });
  };
}
