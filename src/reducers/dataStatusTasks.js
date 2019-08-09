import { TYPE } from '../scripts/const';

const dataStatusTasks = (state = false, action) => {
	switch (action.type) {
		case TYPE.LOADER_ADD_DATA:
			return {
				getDataStatus: false,
			};
		default:
			return state;
	}
};

export default dataStatusTasks;
