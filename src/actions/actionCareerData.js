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

export function CreateCareerData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.CAREERPATH}`, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        img: item.img,
        bgColor: item.bgColor,
        title: item.title,
        descr: item.descr,
        theme: item.theme,
        language: item.language,
        knowledge: item.knowledge,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  return {
    type: TYPE.CREATE_CAREER_DATA,
    payload,
  };
}