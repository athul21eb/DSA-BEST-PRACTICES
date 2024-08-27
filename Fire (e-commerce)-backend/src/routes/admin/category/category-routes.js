import { Router } from "express";
import { createCategory,getCategories,updateCategory ,updateCategoryIsActive,deleteCategory} from "../../../controllers/admin/category/category-controllers.js";

const categoryRouter = Router();

categoryRouter.post("/create-category", createCategory);
categoryRouter.get('/get-categories',getCategories);
categoryRouter.put('/update-category',updateCategory);
categoryRouter.patch('/update-category-isActive',updateCategoryIsActive);
categoryRouter.delete('/delete-category',deleteCategory);

export default categoryRouter;
