import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../scripts/const';

function NotFound() {
	return (
		<React.Fragment>
			<div className="not__found__page">
				<div className="not__found__page__attention">PAGE NOT FOUND</div>
				<div className="main__page__link">Go to <NavLink className="main__page__link__active" exact to={`${PATH.FIRST}`}>main page</NavLink></div>
			</div>

		</React.Fragment>
	);
}

export default NotFound;
