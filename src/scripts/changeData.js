import { BASE_PATH } from './const';

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
