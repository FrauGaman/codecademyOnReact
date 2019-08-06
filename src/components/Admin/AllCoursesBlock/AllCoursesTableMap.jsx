import React from 'react';
import Icon from '../../Icons/Icons';

function AllCoursesTableMap({ tableData, themeList, languageList, showModal, removeTableData }) {
	return(
		tableData.data.map(item =>
			<tr key={item.title}>
				<td>{item.title}</td>
				<td>{item.descr}</td>
				<td>{item.importance}</td>
				<td>{item.icon}</td>
				<td>{item.borderColor}</td>
				<td>{item.theme && item.theme.map(themeNumber =>
					themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== '',
					)
				).join(', ')
				}</td>
				<td>{item.language && item.language.map(languageNumber =>
					languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
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

export default AllCoursesTableMap;
