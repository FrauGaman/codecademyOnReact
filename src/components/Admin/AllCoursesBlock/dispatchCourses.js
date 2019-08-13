import {PATH} from '../../../scripts/const';
import { addThemeData } from '../../../actions/themeData';
import { changeData } from '../../../scripts/changeData';
import { addLanguageData } from '../../../actions/languageData';
import { addCoursesData, changeCoursesData, createCoursesData, removeCoursesData } from '../../../actions/coursesData';

export const getThemeData = (count, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.THEME,
		addData: (res) => dispatch(addThemeData(res)),
		limitNumber: count,
		statusEmptyData: () => {},
		statusLoading,
	};
	changeData(options);
};

export const getLanguageData = (count, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.LANGUAGE,
		addData: (res) => dispatch(addLanguageData(res)),
		limitNumber: count,
		statusEmptyData: () => {},
		statusLoading,
	};
	changeData(options);
};

export const removeData = (id, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.COURSESLIST,
		addData: (res) => dispatch(addCoursesData(res)),
		sortField: 'title',
		sortType,
		filterStr,
		field: 'title',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(removeCoursesData(id, statusLoading)).then(() => changeData(options));
};
//
export const createData = (newData, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.COURSESLIST,
		addData: (res) => dispatch(addCoursesData(res)),
		sortField: 'title',
		sortType,
		filterStr,
		field: 'title',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(createCoursesData(newData, statusLoading)).then(() => changeData(options));
};
//
export const editData = (id, state, value, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.COURSESLIST,
		addData: (res) => dispatch(addCoursesData(res)),
		sortField: 'title',
		sortType,
		filterStr,
		field: 'title',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	dispatch(changeCoursesData(id, state, value, statusLoading)).then(() => changeData(options));
};
//
export const findData = (sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.COURSESLIST,
		addData: (res) => dispatch(addCoursesData(res)),
		sortField: 'title',
		sortType,
		filterStr,
		field: 'title',
		name,
		pageNumber,
		limitNumber,
		statusEmptyData,
		statusLoading,
	};
	changeData(options);
};
