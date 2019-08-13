import { PATH } from '../../../scripts/const';
import { addKnowledgeData, changeKnowledgeData,	createKnowledgeData, removeKnowledgeData } from '../../../actions/knowledgeData';
import { changeData } from '../../../scripts/changeData';

export const removeData = (id, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.KNOWLEDGE,
		addData: (res) => dispatch(addKnowledgeData(res)),
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
	dispatch(removeKnowledgeData(id, statusLoading)).then(() => changeData(options));
};

export const createData = (newData, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.KNOWLEDGE,
		addData: (res) => dispatch(addKnowledgeData(res)),
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
	dispatch(createKnowledgeData(newData, statusLoading)).then(() => changeData(options));
};

export const editData = (id, state, value, sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.KNOWLEDGE,
		addData: (res) => dispatch(addKnowledgeData(res)),
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
	dispatch(changeKnowledgeData(id, state, value, statusLoading)).then(() => changeData(options));
};

export const findData = (sortType, name, pageNumber, limitNumber, statusEmptyData, statusLoading, dispatch) => {
	const options = {
		path: PATH.KNOWLEDGE,
		addData: (res) => dispatch(addKnowledgeData(res)),
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
