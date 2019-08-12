import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icons/Icons';

function ThemeTableMap({ tableData, showModal, removeTableData }) {
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
	);
}

ThemeTableMap.propTypes = {
	tableData: PropTypes.shape({
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

export default ThemeTableMap;
