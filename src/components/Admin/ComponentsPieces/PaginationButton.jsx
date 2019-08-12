import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

function PaginationButton({ pageArr, setPageNumber, pageNumber }) {
	return (
		<Pagination>
			{(pageArr.length > 1) && pageArr.map(item =>
				<Pagination.Item key={item} active={item + 1 === pageNumber} onClick={() => setPageNumber(item + 1)}>
					{item + 1}
				</Pagination.Item>
			)}
		</Pagination>
	);
}

PaginationButton.propTypes = {
	pageArr: PropTypes.array,
	setPageNumber: PropTypes.func,
	pageNumber: PropTypes.number,
};

export default PaginationButton;
