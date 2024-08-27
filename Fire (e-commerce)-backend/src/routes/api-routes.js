import {Router} from 'express'
import AuthRouter from './authencation/auth-routes.js';
import AdminRouter from './admin/admin-routes.js';
import { AdminVerifyJWT } from '../middlewares/verifyJWT/verify-jwt.js';

import PublicRouter from './public/public-routes.js';

const apiRouter = Router();

//// -------------------------------authentication Router----------------------------------------------
apiRouter.use("/auth",AuthRouter);

//// -------------------------------Category Router----------------------------------------------
apiRouter.use("/admin",AdminVerifyJWT,AdminRouter)

//// -------------------------------Public Router----------------------------------------------

apiRouter.use("/public",PublicRouter);


export default apiRouter
