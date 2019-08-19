import { TYPE } from '../scripts/const';

export default function userIsLogIn(payload) {
	return {
		type: TYPE.USER_IS_LOGIN,
		payload,
	};
}
