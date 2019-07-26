export const requiredField = value => {
  if (value) return undefined;
  return 'This field is required!';
};

// export const setMaxLength = (maxLength) => value => {
//     if (value.length < maxLength) return undefined;
//     return `max length is ${maxLength}`;
// };
//
export const stringCharacters = value => {
  console.log(value)
}