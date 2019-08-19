function fetchData({
	 url,
	 success,
	 fail,
	statusEmptyData,
	statusLoading,
	setFormError,
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
				statusLoading(true);
				! statusEmptyData ?
				res.json()
					.then((res) => {
						setFormError && setFormError(res.errors[0]);
					})
				: statusEmptyData(true);
			}
		})
		.catch(err => {
			fail(err);
		});
}

export default fetchData;
