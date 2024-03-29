export const requiredField = value => {
  if (value) return undefined;
  return 'This field is required!';
};

export const setMaxLength = maxLength => value => {
  if (value.length <= maxLength) return undefined;
  return `Max length is ${maxLength}`;
};

export const setMinLength = minLength => value => {
  if (value.length >= minLength) return undefined;
  return `Min length is ${minLength}`;
};

export const stringValidator = value => {
  if (value.match(/[a-z0-9а-яё]+/i)) return undefined;
  return 'valid characters: a-z, а-я, ё,0-9';
};

export const linkValidator = value => {
  if (value && value.match(/^\/[\d+\w+-]+$/i)) return undefined;
  return 'Link begins with / without spacing and contains only eng language';
};

export const match = matchName => (value, allValues) => {
  if (value === allValues[matchName]) return undefined;
  return 'Passwords must match';
};
