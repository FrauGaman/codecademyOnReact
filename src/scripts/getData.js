import { BASE_PATH } from './const';

export default function getData(path, addData) {
  return fetch(`${BASE_PATH}${path}`)
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('error');
      }
      return res.json()
    })
    .then(res => addData(res))
    .catch(error => console.log(error));
}
