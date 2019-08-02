import { BASE_PATH, PATH, TYPE } from '../scripts/const';

export function AddSkillData(payload) {
  return {
    type: TYPE.SKILL_ADD_DATA,
    payload,
  };
}

export function RemoveSkillData(id) {
  return dispatch => {
    dispatch(AddSkillData);
    return fetch(`${BASE_PATH}${PATH.SKILLPATH}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.SKILL_REMOVE_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateSkillData(payload) {
  return dispatch => {
    dispatch(AddSkillData);
    return fetch(`${BASE_PATH}${PATH.SKILLPATH}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.SKILL_CREATE_DATA,
        payload,
      };
    });
  };
}

export function ChangeSkillData(state, payload) {
  state.data.map(item =>
    item.id === payload.id &&
      fetch(`${BASE_PATH}${PATH.SKILLPATH}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: payload.title,
          descr: payload.descr,
          img: payload.img,
          bgColor: payload.bgColor,
          period: payload.period,
          theme: payload.theme,
          language: payload.language,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }),
  );
  return {
    type: TYPE.SKILL_CHANGE_DATA,
    payload,
  };
}
