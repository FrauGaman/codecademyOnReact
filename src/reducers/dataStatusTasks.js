import { TYPE } from '../scripts/const';

const dataStatusTasks = (state = { loading: false, emptyData: false }, action) => {
	switch (action.type) {
		case TYPE.STATUS_LOAD_DATA:
			return {
				...state,
				loading: action.payload,
			};
		case TYPE.STATUS_EMPTY_DATA:
			return {
				...state,
				emptyData: action.payload,
			};
		default:
			return state;
	}
};

export default dataStatusTasks;
