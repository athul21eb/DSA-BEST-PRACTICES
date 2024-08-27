import { Router } from "express";
import { getAllBrands, getAllProducts } from "../../controllers/public/public-controllers.js";


const PublicRouter = Router();



//// ------------------------------- public Routes----------------------------------------------


PublicRouter.get("/get-products",getAllProducts);

PublicRouter.get("/get-Brands",getAllBrands);







export default PublicRouter;