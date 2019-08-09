import {TYPE} from '../scripts/const';

export function AddDataStatus(payload) {
	return {
		type: TYPE.LOADER_ADD_DATA,
		payload,
	};
}