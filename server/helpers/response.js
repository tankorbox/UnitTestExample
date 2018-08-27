import HTTPStatus from 'http-status';

export default class Response {

	static success(res, data = null, pageInfo = null) {
		if (typeof data === 'boolean' || data) {
			if (pageInfo) {
				res
					.status(HTTPStatus.OK)
					.json({
						data: data,
						pageInfo: pageInfo
					});

			} else {
				res
					.status(HTTPStatus.OK)
					.json({
						data: data
					});
			}
		} else {
			res
				.status(HTTPStatus.OK)
				.json({});
		}
	}

	static error(res, error) {
		if (process.env.NODE_ENV === 'development') {
			console.log(error);
		}
		if (error.name === 'Error' || error.status === undefined) {
			res
				.status(HTTPStatus.INTERNAL_SERVER_ERROR)
				.send({
					error: {
						message: 'TECHNICAL_ERROR',
						code: 'TECHNICAL_ERROR',
						statusCode: HTTPStatus.INTERNAL_SERVER_ERROR
					}
				});
		} else {
			res
				.status(error.status || HTTPStatus.BAD_REQUEST)
				.send({
					error: {
						message: error.message,
						code: error.code,
						statusCode: error.status || HTTPStatus.BAD_REQUEST
					}
				});
		}
	}

};
