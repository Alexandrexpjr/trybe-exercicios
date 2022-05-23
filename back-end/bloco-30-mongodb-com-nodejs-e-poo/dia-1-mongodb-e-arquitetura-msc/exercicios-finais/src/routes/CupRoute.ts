import { Router } from "express";
import CupController from "../controllers/CupController";

const CupRoute = Router();
const cupController = new CupController();

CupRoute.get('/', cupController.getCups);
CupRoute.get('/:year', cupController.getCupByYear);
CupRoute.post('/', cupController.create);

export default CupRoute;