import { BASE_PATH, PATH, TYPE } from '../scripts/const';
import { AddSkillData } from './actionSkillData';

export function AddCareerData(payload) {
  return {
    type: TYPE.ADD_CAREER_DATA,
    payload,
  };
}

export function RemoveCareerData(id) {
  return dispatch => {
    dispatch(AddSkillData);
    return fetch(`${BASE_PATH}${PATH.CAREERPATH}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      return {
        type: TYPE.REMOVE_CAREER_DATA,
        payload: { id },
      };
    });
  };
}

export function CreateCareerData(payload) {
  return dispatch => {
    dispatch(AddSkillData);
    return fetch(`${BASE_PATH}${PATH.CAREERPATH}`, {
      method: 'POST',
      body: JSON.stringify({
        id: +new Date(),
        ...payload,
      }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => {
      return {
        type: TYPE.CREATE_CAREER_DATA,
        payload,
      };
    });
  };
}

export function ChangeCareerData(state, payload) {
  state.data.map(item =>
    item.id === payload.id ?
      fetch(`${BASE_PATH}${PATH.CAREERPATH}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: payload.title,
          descr: payload.descr,
          img: payload.img,
          bgColor: payload.bgColor,
          theme: payload.theme,
          language: payload.language,
          knowledge: payload.knowledge,
        }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }) : '',
  );
  return {
    type: TYPE.CHANGE_CAREER_DATA,
    payload,
  };
}
