import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddCoursesData(payload) {
  return {
    type: TYPE.COURSES_ADD_DATA,
    payload,
  };
}

export function RemoveCoursesData(id) {
  return dispatch => {
    dispatch(AddCoursesData);
    return fetch(`${BASE_PATH}${PATH.COURSESLIST}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.COURSES_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCoursesData(payload) {
  return dispatch => {
    dispatch(AddCoursesData);
    return fetch(`${BASE_PATH}${PATH.COURSESLIST}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.COURSES_CREATE_DATA,
        payload,
      };
    });
  };
}


export function ChangeCoursesData(state, payload) {
  state.data.map(item =>
    item.id === payload.id &&
      fetch(`${BASE_PATH}${PATH.COURSESLIST}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          importance: payload.importance,
          title: payload.title,
          descr: payload.descr,
          icon: payload.icon,
          borderColor: payload.borderColor,
          theme: payload.theme,
          language: payload.language,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }),
  );
  return {
    type: TYPE.COURSES_CHANGE_DATA,
    payload,
  };
}
