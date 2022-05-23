import { Router } from "express";
import CupController from "../controllers/CupController";

const CupRoute = Router();
const cupController = new CupController();

CupRoute.get('/', cupController.getCups);

export default CupRoute;