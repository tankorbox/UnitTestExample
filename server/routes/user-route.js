import {userController} from '../controllers';
import Wrapper from '../helpers/wrapper';

module.exports = (app, router) => {
	router.route('/users')
		.get(Wrapper.wrapAll(userController.index))
		.post(userController.create);

	router.route('/users/changePassword')
		.put(Wrapper.wrapAll(userController.changePassword));
};