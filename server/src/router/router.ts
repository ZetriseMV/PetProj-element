import { Router } from 'express'
import CategoryInfoController from '../controller/categ-info-controller'
import ProductCategoriesController from '../controller/productsCategories-contorller'
const router = Router();

router.get('/infonavigate',CategoryInfoController.getInfoNavigate)
router.get('/getCategoryElelements',ProductCategoriesController.getProductsWfilter)

export default router

