import {BASE_PATH} from './const';
import fetchData from './fetchData';

export function changeData(options) {
  // const url = `${BASE_PATH}${path}?_sort=${sortField}&_order=${sortType}&${field}_like=${name}&${filterStr}&_page=${pageNumber}&_limit=${limitNumber}`;


  const base = `${BASE_PATH}${options.path}?`;
  const sort = options.sortField && `_sort=${options.sortField}`;
  const order = options.sortType && `&_order=${options.sortType}`;
  const search = options.field && options.name && `&${options.field}_like=${options.name}`;
  const filter = options.filterStr && `&${options.filterStr}`;
  const page = options.pageNumber && `&_page=${options.pageNumber}`;
  const limit = options.limitNumber && `&_limit=${options.limitNumber}`;

  const url = `${base}${sort}${order}${search}${filter}${page}${limit}`;

  // options.setGetDataStatus(false);
  function success(data) {
    const count = data.headers.get('X-Total-Count');
    // options.setGetDataStatus(true);
    // options.setErrorBlock(false);
    new Promise(resolve => data.json()
      .then(res =>
        resolve({
          count: count,
          data: res,
        }),
      )
    ).then(res => options.addData(res));
  }
  function fail(err){ console.log(err)}
  return fetchData({ url, success, fail,  method: 'GET' });
}

export function deleteData(path, id, setGetDataStatus) {
  const url = `${BASE_PATH}${path}/${id}`;
  // setGetDataStatus(false);
  // function success() { setGetDataStatus(true); }
  function success() {console.log('lolo')}
  function fail(err){ console.log(err)}
  return fetchData({ url, success, fail, setGetDataStatus, method: 'DELETE' });
}

export function postData(path, payload, setGetDataStatus) {
  const url = `${BASE_PATH}${path}`;
  // setGetDataStatus(false);
  // function success() { setGetDataStatus(true); }
  function success() {console.log('lolo')}

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
  // setGetDataStatus(false);
  // function success() { setGetDataStatus(true); }
  function success() {console.log('lolo')}
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
