function fetchData({
	 url,
	 success,
	 fail,
	statusEmptyData,
	statusLoading,
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
				success(res);
			} else {
				statusEmptyData(true);
				statusLoading(true);
			}
		})
		.catch(err => {
			fail(err);
		});
}

export default fetchData;
