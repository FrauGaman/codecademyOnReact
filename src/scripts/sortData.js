import { BASE_PATH } from './const';

export function sortData(path,  addData, sortField, sortType) {
  fetch(`${BASE_PATH}${path}?_sort=${sortField}&_order=${sortType}`)
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('error');
      }
      return res.json()})
    .then(res => addData(res))
    .catch(error => console.log(error));
}

