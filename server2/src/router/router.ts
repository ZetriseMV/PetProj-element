import { Router } from 'express'
import {Request, Response,NextFunction} from 'express'
import CategoryInfoController from '../controller/categ-info-controller'
const router = Router();

router.get('/',CategoryInfoController.getInfo)

export default router

