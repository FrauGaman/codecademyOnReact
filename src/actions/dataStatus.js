import {TYPE} from '../scripts/const';

export function setLoading(payload) {
	return {
		type: TYPE.STATUS_LOAD_DATA,
		payload,
	};
}

export function setDataStatusEmpty(payload) {
	return {
		type: TYPE.STATUS_EMPTY_DATA,
		payload,
	};
}