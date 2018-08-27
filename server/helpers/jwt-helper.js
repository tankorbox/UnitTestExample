import JWT from 'jsonwebtoken';
import Config from '../config/config.json';

export default class JWTHelper {
	static sign(data, cert) {
		const expired_in = Config.TOKEN_EXPIRE_TIME || 1234567;
		const token = JWT.sign({
				id: data.id,
				role: data.role
			},
			cert,
			{
				algorithm: 'RS256',
				expiresIn: expired_in
			});
		return {
			access_token: token,
			expire_in: expired_in,
			id : data.id
		};
	}
}