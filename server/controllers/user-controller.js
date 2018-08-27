import {userRepository} from '../repositories';

export default class UserController {
	index = async({}) => {
		const options = {};
		const users = await userRepository.getAll(options);
		console.log(users);
		return users;
	};

	create = async({body}) => {
		const {username, displayName, password, email} = body;
		const result = await userRepository.create({
			username: username,
			displayName: displayName,
			password: password,
			email: email
		});
		console.log(result);
		return result;
	};

	changePassword = async({body, user}) => {
		const {password} = body;
		const result = await userRepository.update({
			password: password
		}, {
			where: {
				id: user.id
			}
		});
		return !!result;
	};
}