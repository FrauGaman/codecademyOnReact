import React from 'react';
import PropTypes from 'prop-types';
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
	);
}

KnowledgeTableMap.propTypes = {
	tableData: PropTypes.shape({
		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
		})),
		count: PropTypes.string,
	}),
	removeTableData: PropTypes.func,
	showModal: PropTypes.func,
};

export default KnowledgeTableMap;
