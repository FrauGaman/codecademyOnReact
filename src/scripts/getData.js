import { BASE_PATH } from './const';

export default function getData(path,  addData) {
  fetch(`${BASE_PATH}${path}`)
    .then(res => res.json())
    .then(res => addData(res))
    .catch(error => console.log(error, 'error'));
}