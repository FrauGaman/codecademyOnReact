import { TYPE } from '../scripts/const';

const userStatusTasks = (state = { login: false, signin: false }, action) => {
	switch (action.type) {
		case TYPE.USER_IS_LOGIN:
			return {
				...state,
				login: action.payload,
			};
		case TYPE.USER_IS_SIGNIN:
			return {
				...state,
				signin: action.payload,
			};
		default:
			return state;
	}
};

export default userStatusTasks;
