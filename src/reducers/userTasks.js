import { TYPE } from '../scripts/const';

const userStatusTasks = (state = { login: false }, action) => {
	switch (action.type) {
		case TYPE.USER_IS_LOGIN:
			if(action.payload !== null) {
				action.payload = true;
			} else {
				action.payload = false;
			}
			return {
				...state,
				login: action.payload,
			};
		default:
			return state;
	}
};

export default userStatusTasks;
