import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddCoursesData(payload) {
  return {
    type: TYPE.ADD_COURSES_DATA,
    payload,
  };
}

export function RemoveCoursesData(id) {
  fetch(`${BASE_PATH}${PATH.COURSESLIST}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_COURSES_DATA,
    payload: { id },
  };
}

export function CreateCoursesData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.COURSESLIST}`, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        importance: item.importance,
        title: item.title,
        descr: item.descr,
        icon: item.icon,
        borderColor: item.borderColor,
        theme: item.theme,
        language: item.language,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  return {
    type: TYPE.CREATE_COURSES_DATA,
    payload,
  };
}