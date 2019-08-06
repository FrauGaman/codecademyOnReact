import React from 'react';
import Icon from '../../Icons/Icons';

function CareerTableMap({ tableData, themeList, languageList, knowledgeList, showModal, removeTableData }) {
	return(
		tableData.data.map(item =>
			<tr key={item.id}>
				<td>{item.title}</td>
				<td className="hidden__col__big">{item.descr}</td>
				<td className="hidden__col__big">{item.img}</td>
				<td className="hidden__col">{item.bgColor}</td>
				<td className="hidden__col">{item.theme && item.theme.map(themeNumber =>
					themeList.data && themeList.data.map(elem => themeNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== ''
					)
				).join(', ')
				}</td>
				<td className="hidden__col">{item.language && item.language.map(languageNumber =>
					languageList.data && languageList.data.map(elem => languageNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== ''
					)
				).join(', ')
				}</td>
				<td className="hidden__col">{item.knowledge && item.knowledge.map(knowledgeNumber =>
					knowledgeList.data && knowledgeList.data.map(elem => knowledgeNumber === elem.id ? `${elem.name} ` : '',
					).find(item =>
					item !== ''
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

export default CareerTableMap