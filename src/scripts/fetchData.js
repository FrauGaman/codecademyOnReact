function fetchData({
	 url,
	 success,
	 fail,
	 method,
	 body = null,
	 headers = {Accept: 'application/json', 'Content-Type': 'application/json'},
}){
	const options = {};

	options.method = method;
	options.headers = headers;
	options.body = body;

	return fetch(url, options)
		.then(res => {
			if (res.ok) {
				success(res);
			} else {
				// setGetDataStatus(true);
			}
		})
		.catch(err => {
			fail(err);
		});
}

export default fetchData;
