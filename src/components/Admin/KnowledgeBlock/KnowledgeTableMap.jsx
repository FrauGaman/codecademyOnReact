import React from 'react';
import Icon from '../../Icons/Icons';

function KnowledgeTableMap({tableData, removeTableData, showModal}) {
	return (
		tableData.data.map(item =>
				<tr key={item.id}>
					<td>{item.name}</td>
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
export default KnowledgeTableMap;
