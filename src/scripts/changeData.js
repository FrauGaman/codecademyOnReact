import {BASE_PATH} from './const';
import fetchData from './fetchData';

export function changeData({
  path = '',
  addData = () => {},
  sortField = '',
  sortType = '',
  filterStr = '',
  field = 'name',
  name = '',
  pageNumber = 1,
  limitNumber = '10',
  setGetDataStatus = () => {},
  setErrorBlock = () => {},
}) {
  const url = `${BASE_PATH}${path}?_sort=${sortField}&_order=${sortType}&${field}_like=${name}&${filterStr}&_page=${pageNumber}&_limit=${limitNumber}`;
  setGetDataStatus(false);
  function success(data) {
    const count = data.headers.get('X-Total-Count');
    setGetDataStatus(true);
    setErrorBlock(false);
    new Promise(resolve => data.json()
      .then(res =>
        resolve({
          count: count,
          data: res,
        }),
      )
    ).then(res => addData(res));
  }
  function fail(err){ console.log(err)}
  return fetchData({ url, success, fail, setErrorBlock, setGetDataStatus, method: 'GET' });
}

export function deleteData(path, id, setGetDataStatus) {
  const url = `${BASE_PATH}${path}/${id}`;
  setGetDataStatus(false);
  function success() { setGetDataStatus(true); }
  function fail(err){ console.log(err)}
  return fetchData({ url, success, fail, setGetDataStatus, method: 'DELETE' });
}

export function postData(path, payload, setGetDataStatus) {
  const url = `${BASE_PATH}${path}`;
  setGetDataStatus(false);
  function success() { setGetDataStatus(true); }
  function fail(err){ console.log(err) }
  return fetchData({
    url,
    success,
    fail,
    setGetDataStatus,
    method: 'POST',
    body: JSON.stringify({
      id: +new Date(),
      ...payload,
    }),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export function putData(path, id, body, setGetDataStatus) {
  const url = `${BASE_PATH}${path}/${id}`;
  setGetDataStatus(false);
  function success() { setGetDataStatus(true); }
  function fail(err){ console.log(err); }

  return fetchData({
    url,
    success,
    fail,
    setGetDataStatus,
    method: 'PUT',
    body: JSON.stringify(
      body,
    ),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
