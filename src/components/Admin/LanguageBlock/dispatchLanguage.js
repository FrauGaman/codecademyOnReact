import {PATH} from '../../../scripts/const';
import {
	addLanguageData,
	changeLanguageData,
	createLanguageData,
	removeLanguageData
} from '../../../actions/languageData';
import {changeData} from '../../../scripts/changeData';

export const removeData = (id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.LANGUAGE,
		addData: (res) => dispatch(addLanguageData(res)),
		sortField: 'name',
		sortType,
		filterStr: '',
		field: 'name',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(removeLanguageData(id, statusLoading)).then(() => changeData(options));
};
export const createData = (newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.LANGUAGE,
		addData: (res) => dispatch(addLanguageData(res)),
		sortField: 'name',
		sortType,
		filterStr: '',
		field: 'name',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(createLanguageData(newData, statusLoading)).then(() => changeData(options));
};
export const editData = (id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.LANGUAGE,
		addData: (res) => dispatch(addLanguageData(res)),
		sortField: 'name',
		sortType,
		filterStr: '',
		field: 'name',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(changeLanguageData(id, state, value, statusLoading)).then(() => changeData(options));
};
export const findData = (sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.LANGUAGE,
		addData: (res) => dispatch(addLanguageData(res)),
		sortField: 'name',
		sortType,
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	changeData(options);
};
