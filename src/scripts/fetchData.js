function fetchData({
	 url,
	 success,
	 fail,
	statusEmptyData,
	statusLoading,
	setErrorAuthData,
	setNotConfirm,
	setBlockedUser,
	setNotFoundData,
	 method,
	 body = null,
	 headers = {Accept: 'application/json', 'Content-Type': 'application/json'},
}) {
	const options = {};
	options.method = method;
	options.headers = headers;
	options.body = body;

	return fetch(url, options)
		.then(res => {
			if (res.ok) {
				return success(res);
			} else {
				! statusEmptyData ?
				res.json()
					.then((res) => {
						if(res.errors[0].code === 'sec.invalid_auth_data') {
							setErrorAuthData && setErrorAuthData(true);
						} else if (res.errors[0].code === 'sec.login_should_be_confirmed') {
							setNotConfirm && setNotConfirm(true);
						} else if (res.errors[0].code === 'sec.user_blocked') {
							setBlockedUser && setBlockedUser(true);
						} else if (res.errors[0].code === 'not_found') {
							setNotFoundData && setNotFoundData(true);
						}
					})
				: statusEmptyData(true);
				statusLoading(true);
			}
		})
		.catch(err => {
			fail(err);
		});
}

export default fetchData;
