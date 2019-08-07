import React from 'react';
import './errorBlock.sass';

function EmptyData({ colSpan, problem }) {
	return (
		<tr className="empty__error">
			<td colSpan={colSpan}>{ problem }</td>
		</tr>
	)
}

export default EmptyData;
