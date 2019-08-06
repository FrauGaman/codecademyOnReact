import React from 'react';
import Icon from '../../Icons/Icons';

function LanguageTableMap({ tableData, showModal, removeTableData }) {
	return (
		tableData.data.map(item =>
			<tr key={item.id}>
				<td>{item.name}</td>
				<td className="hidden__col">{item.descr}</td>
				<td className="hidden__col">{item.link}</td>
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

export default LanguageTableMap;
