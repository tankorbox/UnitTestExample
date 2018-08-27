import Response from '../helpers/response';

export default class Wrapper {

	static wrapAll(func) {
		return (req, res) => {
			func(req, res)
				.then(data => {
					Response.success(res, data);
				})
				.catch(error => {
					Response.error(res, error)
				});
		}
	}

	static wrapError(func) {
		return (req, res) => {
			func(req, res)
				.catch(error => Response.error(res, error));
		}
	}

}