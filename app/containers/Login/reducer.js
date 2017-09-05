/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_RESET_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

const initialState = fromJS({
  isAuthenticated: false,
  requestFail: false,
  error_user: '',
  error_password: '',
  disable: false,
  loading: false,
  isLogout: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state
        .set('loading', true)
        .set('disable', true);
    }
    case LOGIN_ERROR: {
      const { username, password } = action.payload.errors;
      return state
        .set('error_user', username)
        .set('error_password', password);
    }
    case LOGIN_RESET_ERROR: {
      const input = action.payload.input === 'username' ? 'error_user' : 'error_password';
      return state.set(input, '');
    }
    case LOGIN_SUCCESS: {
      console.log("successs")
      const { token, expiry } = action.payload;
      return state
        .set('isAuthenticated', true)
        .set('requestFail', false)
        .set('error_user', '')
        .set('error_password', '')
        .set('disable', false)
        .set('loading', false);
    }
    case LOGIN_FAIL: {
      return state
        .set('isAuthenticated', false)
        .set('requestFail', true)
        .set('error_user', '')
        .set('error_password', '')
        .set('disable', false)
        .set('loading', false);
    }
    default:
      return state;
  }
}

export default loginReducer;
