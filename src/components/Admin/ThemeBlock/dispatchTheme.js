import {PATH} from '../../../scripts/const';
import {addThemeData, changeThemeData, createThemeData, removeThemeData} from '../../../actions/themeData';
import {changeData} from '../../../scripts/changeData';

export const removeData = (id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.THEME,
		addData: (res) => dispatch(addThemeData(res)),
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
	dispatch(removeThemeData(id, statusLoading)).then(() => changeData(options));
};
export const createData = (newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.THEME,
		addData: (res) => dispatch(addThemeData(res)),
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
	dispatch(createThemeData(newData, statusLoading)).then(() => changeData(options));
};
export const editData = (id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.THEME,
		addData: (res) => dispatch(addThemeData(res)),
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
	dispatch(changeThemeData(id, state, value, statusLoading)).then(() => changeData(options));
};
export const findData = (sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.THEME,
		addData: (res) => dispatch(addThemeData(res)),
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
