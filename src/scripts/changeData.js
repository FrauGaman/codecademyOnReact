import {BASE_PATH} from './const';

export function changeData(path, addData, sortField = '', sortType = '', filterStr = '', field = '', name = '', pageNumber = 1, limitNumber = '') {
  fetch(`${BASE_PATH}${path}?_sort=${sortField}&_order=${sortType}&${field}_like=${name}&${filterStr}&_page=${pageNumber}&_limit=${limitNumber}`)
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('error');
      }
      const count = res.headers.get('X-Total-Count');
      return res.json()
        .then(res => {
          return {
            count: count,
            data: res,
          };
        });
    })
    .then(res => addData(res))
    .catch(error => console.log(error));
}

export function getData(path, addData) {
  fetch(`${BASE_PATH}${path}`)
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('error');
      }
      const count = res.headers.get('X-Total-Count');
      return res.json()
        .then(res => {
          return {
            count: count,
            data: res,
          };
        });
    })
    .then(res => addData(res))
    .catch(error => console.log(error));
}

export function deleteData(path, id) {
  return fetch(`${BASE_PATH}${path}/${id}`, {
    method: 'DELETE',
  });
}

export function postData(path, payload) {
  return fetch(`${BASE_PATH}${path}`, {
    method: 'POST',
    body: JSON.stringify({
      id: +new Date(),
      ...payload,
    }),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export function putData(path, id, body) {
  return fetch(`${BASE_PATH}${path}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(
      body,
    ),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
