import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icons/Icons';

function SkillTableMap({ tableData, themeList, languageList, showModal, removeTableData }) {
	return (
		tableData.data.map(item =>
			<tr key={item.id}>
				<td>{item.title}</td>
				<td className="hidden__col__big">{item.descr}</td>
				<td className="hidden__col__big">{item.img}</td>
				<td className="hidden__col">{item.bgColor}</td>
				<td className="hidden__col">{item.theme && item.theme.map(themeNumber =>
					themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== '',
					)
				).join(', ')
				}</td>
				<td className="hidden__col">{item.language && item.language.map(languageNumber =>
					languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== '',
					)
				).join(', ')
				}</td>
				<td className="hidden__col">{item.period}</td>
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
	);
}

SkillTableMap.propTypes = {
	tableData: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			img: PropTypes.img,
			bgColor: PropTypes.string,
			title: PropTypes.string,
			descr: PropTypes.string,
			period: PropTypes.string,
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

export default SkillTableMap;
