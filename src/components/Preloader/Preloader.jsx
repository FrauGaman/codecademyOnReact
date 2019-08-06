import React from 'react';
import './preloader.sass';

function Preloader() {
	return (
		<div className="loader">
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
		</div>
	);
}

export default Preloader;
