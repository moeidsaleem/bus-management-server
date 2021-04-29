import { Router } from 'express';
import auth from './routes/auth';
import student from './routes/user';
import department from './routes/department';
import bus from './routes/bus';
import driver from './routes/driver';
import route from './routes/route';
// import shop from './routes/shop';


// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	student(app);
	bus(app);
	department(app);
	route(app);
	driver(app)
	// shop(app);
	return app
}