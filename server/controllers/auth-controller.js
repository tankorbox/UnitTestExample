import JWT from 'jsonwebtoken';
import {userRepository} from '../repositories';
import Path from 'path';
import FS from 'fs';
import Response from '../helpers/response';
import JWTHelper from '../helpers/jwt-helper';

export default class AuthController {
	login = async(req, res) => {
		const {username, password} = req.body;
		const user = await userRepository.get({
			attributes: ['id', 'username', 'password'],
			where: {
				username: username
			},
		});
		if (!user) {
			throw new Error('User not found!');
		} else {
			const isValidPassword = await user.comparePassword(password);
			if (!isValidPassword) {
				throw new Error('Wrong password');
			}
			else {
				const path = Path.resolve(__dirname, '..', 'config', 'cert', 'private.key');
				const cert = FS.readFileSync(path);
				const data = {
					id: user.id
				};
				const result =  await JWTHelper.sign(data, cert);
				return Response.success(res, result);
			}
		}
	};

	signup = async(req, res) => {

	};

	isAuth =async(req, res) => {

	}
};