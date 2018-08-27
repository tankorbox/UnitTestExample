import DOTEnv from 'dotenv';
import Config from '../config/config.json';
import DBConfig from '../config/db-config.json';
DOTEnv.config();
const env = process.env.NODE_ENV;
const port = process.env.PORT;


module.exports = {
	env: env,
	port: port,
	config: Config[env],
	dbConfig: DBConfig[env]
};