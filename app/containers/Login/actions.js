/*
 *
 * Login actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_CHECK,
  LOGIN_RESET_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

export function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      user,
    },
  };
}
export function loginError(errors) {
  return {
    type: LOGIN_ERROR,
    payload: {
      errors,
    },
  };
}
export function loginCheck(user) {
  return {
    type: LOGIN_CHECK,
    payload: {
      user,
    },
  };
}
export function loginResetError(input) {
  return {
    type: LOGIN_RESET_ERROR,
    payload: {
      input,
    },
  };
}
export function loginSucess(response) {
  const { token, expiry } = response;
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
      expiry,
    },
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAIL,
    payload: {
      error,
    },
  };
}

