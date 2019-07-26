export const requiredField = value => {
  if (value) return undefined;
  return 'This field is required!';
};

// export const setMaxLength = (maxLength) => value => {
//     if (value.length < maxLength) return undefined;
//     return `max length is ${maxLength}`;
// };

// export const setMaxLength = value => {
//   console.log(value)
// }

export const stringValidator = value => {
  if (value.match(/[a-z0-9а-яё]+/i)) return undefined;
  return 'valid characters: a-z, а-я, ё,0-9';
};


//ДОБАВИТЬ УСЛОВИЕ ОТСУТСТВИЯ ПРОБЕЛОВ МЕДЛУ СИМВОЛАМИ!!
export const linkValidator = value => {
  if (value.match(/\/\S[\d\w\s]+/i)) return undefined;
  return 'Link begins with / without spacing';
}