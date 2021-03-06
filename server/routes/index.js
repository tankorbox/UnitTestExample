import FS from 'fs';
import Express from 'express';
import Path from 'path';

const app = Express();
const router = Express.Router();
const routePath = Path.resolve(__dirname, '');
const basename = Path.basename(module.filename);

FS
	.readdirSync(routePath)
	.filter((file) => {
		return (file !== basename);
	})
	.forEach((file) => {
		require(`${routePath}/${file}`)(app, router);
	});

module.exports = router;