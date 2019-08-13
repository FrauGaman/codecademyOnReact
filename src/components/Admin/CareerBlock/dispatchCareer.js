import { PATH } from '../../../scripts/const';
import { addThemeData } from '../../../actions/themeData';
import { changeData } from '../../../scripts/changeData';
import { addLanguageData } from '../../../actions/languageData';
import { addKnowledgeData } from '../../../actions/knowledgeData';
import { addCareerData, changeCareerData, createCareerData, removeCareerData } from '../../../actions/careerData';

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

export const getKnowledgeData = (count, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.KNOWLEDGE,
		addData: (res) => dispatch(addKnowledgeData(res)),
		limitNumber: count,
		statusEmptyData: () => {},
		statusLoading,
	};
	changeData(options);
};

export const removeData = (id, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.CAREERPATH,
		addData: (res) => dispatch(addCareerData(res)),
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
	dispatch(removeCareerData(id, statusLoading)).then(() => changeData(options));
};

export const createData = (newData, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.CAREERPATH,
		addData: (res) => dispatch(addCareerData(res)),
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
	dispatch(createCareerData(newData, statusLoading)).then(() => changeData(options));
};

export const editData = (id, state, value, sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.CAREERPATH,
		addData: (res) => dispatch(addCareerData(res)),
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
	dispatch(changeCareerData(id, state, value, statusLoading)).then(() => changeData(options));
};

export const findData = (sortType, filterStr, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.CAREERPATH,
		addData: (res) => dispatch(addCareerData(res)),
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
