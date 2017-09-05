import _ from 'lodash';

const validateInput = (data) => {
  const { username, password } = data;
  const errors = {};
  errors.username = checkUsername(username);
  errors.password = checkPassword(password);
  const hasError = errors.username || errors.password ? true : false;
  return {errors,hasError};
};
const checkRegex = (data) => {
  const regex = '^[A-Za-z0-9][A-Za-z0-9@#%&*]*$';
  return data.match(regex);
};
const checkUsername = (username) => {
  if (username.length === 0) {
    return 'Please Type your username !';
  } else if (!checkRegex(username)) {
    return 'Format your username wrong !';
  } else if (username.length < 6) {
    return 'Your username must more than 6 charactors !';
  }
  return '';
};
const checkPassword = (password) => {
  if (password.length === 0) {
    return 'Please Type your password !';
  } else if (password.length < 8) {
    return 'Your password must more than 8 charactors !';
  }
  return '';
};
export default { validateInput, checkUsername, checkPassword };
