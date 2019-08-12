import {BASE_PATH} from './const';
import fetchData from './fetchData';

export function changeData(options) {
  const base = `${BASE_PATH}${options.path}?`;
  const sort = options.sortField && `_sort=${options.sortField}`;
  const order = options.sortType && `&_order=${options.sortType}`;
  const search = options.field && options.name && `&${options.field}_like=${options.name}`;
  const filter = options.filterStr && `&${options.filterStr}`;
  const page = options.pageNumber && `&_page=${options.pageNumber}`;
  const limit = options.limitNumber && `&_limit=${options.limitNumber}`;

  const url = `${base}${sort}${order}${search}${filter}${page}${limit}`;

  options.statusLoading(false);
  options.statusEmptyData(false);

  function success(data) {
    const count = data.headers.get('X-Total-Count');
    options.statusLoading(true);
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
  return fetchData({ url, success, fail,  method: 'GET', statusEmptyData: options.statusEmptyData, statusLoading: options.statusLoading });
}

export function deleteData(path, id, statusLoading) {
  const url = `${BASE_PATH}${path}/${id}`;
  statusLoading(false);
  function success() { statusLoading(true); }
  function fail(err){ console.log(err)}
  return fetchData({ url, success, fail, method: 'DELETE', statusLoading });
}

export function postData(path, payload, statusLoading) {
  const url = `${BASE_PATH}${path}`;
  statusLoading(false);
  function success() { statusLoading(true); }
  function fail(err){ console.log(err) }
  return fetchData({
    url,
    success,
    fail,
    method: 'POST',
    body: JSON.stringify({
      id: +new Date(),
      ...payload,
    }),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    statusLoading,
  });
}

export function putData(path, id, body, statusLoading) {
  const url = `${BASE_PATH}${path}/${id}`;
  statusLoading(false);
  function success() { statusLoading(true); }
  function fail(err){ console.log(err); }

  return fetchData({
    url,
    success,
    fail,
    method: 'PUT',
    body: JSON.stringify(
      body,
    ),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    statusLoading,
  });
}
