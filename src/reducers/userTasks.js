import { TYPE } from '../scripts/const';

const userStatusTasks = (state = { login: false, signup: false }, action) => {
	switch (action.type) {
		case TYPE.USER_IS_LOGIN:
			return {
				...state,
				login: action.payload,
			};
		case TYPE.USER_IS_SIGNIN:
			return {
				...state,
				signup: action.payload,
			};
		default:
			return state;
	}
};

export default userStatusTasks;
