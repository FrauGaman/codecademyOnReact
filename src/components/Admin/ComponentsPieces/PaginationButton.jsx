import React from 'react';

function PaginationButton({pageArr, setPageNumber}) {
	return(
		(pageArr.length > 1) && pageArr.map(item =>
			<button
				key={item}
				className="page"
				onClick={() => setPageNumber(item + 1)}>
				{item+1}
			</button>
		)
	)
}

export default PaginationButton;
