import { put, takeLatest ,} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { loginCheck, loginSucess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './constants';
// Individual exports for testing
export function* getLogin(action) {
  const user = action.payload.user;
  const callAPI = axios.post('http://localhost:3001/users/getuser', { user }).then((resp) => resp).catch((err) => { throw err; });
  try {
    const response = yield callAPI;
    yield put(loginSucess(response));
  } catch (err) {
    yield put(loginFailure(err));
  }
}
export function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, getLogin);
}

// All sagas to be loaded
export default [
  userSaga,
];
