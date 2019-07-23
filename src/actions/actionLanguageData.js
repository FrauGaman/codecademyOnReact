import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddLanguageData(payload) {
  return {
    type: TYPE.ADD_LANGUAGE_DATA,
    payload,
  };
}

export function RemoveLanguageData(id) {
  fetch (`${BASE_PATH}${PATH.LANGUAGE}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_LANGUAGE_DATA,
    payload: {id},
  };
}

export function CreateLanguageData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.LANGUAGE}`, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        descr: item.descr,
        link: item.link,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  console.log(payload)
  return {
    type: TYPE.CREATE_LANGUAGE_DATA,
    payload,
  };
}