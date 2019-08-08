import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icons/Icons';

function AllCoursesTableMap({ tableData, themeList, languageList, showModal, removeTableData }) {
	return(
		tableData.data.map(item =>
			<tr key={item.title}>
				<td>{item.title}</td>
				<td className="hidden__col__big">{item.descr}</td>
				<td className="hidden__col">{item.importance}</td>
				<td className="hidden__col__big">{item.icon}</td>
				<td className="hidden__col__big">{item.borderColor}</td>
				<td className="hidden__col">{!!item.theme && item.theme.map(themeNumber =>
					!!themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== '',
					)
				).join(', ')
				}</td>
				<td className="hidden__col">{item.language && item.language.map(languageNumber =>
					!!languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== '',
					)
				).join(', ')
				}</td>
				<td>
					<div onClick={() => showModal(item.id)}>
						<Icon iconName={'edit'} className={'editIcon'} />
					</div>
					<div onClick={() => removeTableData(item.id)}>
						<Icon iconName={'delete'} className={'delIcon'} />
					</div>
				</td>
			</tr>
		)
	)
}

AllCoursesTableMap.propTypes = {
	tableData: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			importance: PropTypes.string,
			title: PropTypes.string,
			descr: PropTypes.string,
			icon: PropTypes.string,
			borderColor: PropTypes.string,
			theme: PropTypes.array,
			language: PropTypes.array,
		})),
		count: PropTypes.string,
	}),
	themeList: PropTypes.shape({
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		descr: PropTypes.string,
		link: PropTypes.string,
	})),
	count: PropTypes.string,
}),
	languageList: PropTypes.shape({
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		descr: PropTypes.string,
		link: PropTypes.string,
	})),
	count: PropTypes.string,
}),
	showModal: PropTypes.func,
	removeTableData: PropTypes.func,
};

export default AllCoursesTableMap;
