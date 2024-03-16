import { SUCCESS_SIGN_UP, SUCCESS_LOGIN, SUCCESS_LOGOUT, SET_USER } from './actionType';
//action creator Auth
export function successSignUp(dataItems) {
  return {
    type: SUCCESS_SIGN_UP,
    data: dataItems
  }
}

export function successLogin(dataItems) {
  return {
    type: SUCCESS_LOGIN,
    data: dataItems
  }
}

export function successLogout(dataItems) {
  return {
    type: SUCCESS_LOGOUT,
    data: dataItems
  }
}

export function setUser(dataItems) {
  return {
    type: SET_USER,
    data: dataItems
  }
}
