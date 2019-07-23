import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddSkillData(payload) {
  return {
    type: TYPE.ADD_SKILL_DATA,
    payload,
  };
}

export function RemoveSkillData(id) {
  fetch (`${BASE_PATH}${PATH.SKILLPATH}/${id}`, {
    method: 'DELETE',
  });
  return {
    type: TYPE.REMOVE_SKILL_DATA,
    payload: {id},
  }
}

export function CreateSkillData(payload) {
  payload.map(item =>
    fetch(`${BASE_PATH}${PATH.SKILLPATH}`, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        img: item.img,
        bgColor: item.bgColor,
        title: item.title,
        descr: item.descr,
        period: item.period,
        theme: item.theme,
        language: item.language,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
  );
  return {
    type: TYPE.CREATE_SKILL_DATA,
    payload,
  };
}
