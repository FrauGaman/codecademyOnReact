import React from 'react';
import PropTypes from 'prop-types';
import './errorBlock.sass';

function EmptyData({ colSpan, problem }) {
	return (
		<tr className="empty__error">
			<td colSpan={colSpan}>{ problem }</td>
		</tr>
	)
}
EmptyData.propTypes = {
	colSpan: PropTypes.number,
	problem: PropTypes.string,
};

export default EmptyData;
