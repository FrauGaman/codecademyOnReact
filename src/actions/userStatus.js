import {TYPE} from '../scripts/const';

export function userIsLogIn(payload) {
	return {
		type: TYPE.USER_IS_LOGIN,
		payload,
	}
}

export function userIsSignIn(payload) {
	return {
		type: TYPE.USER_IS_SIGNIN,
		payload,
	}
}