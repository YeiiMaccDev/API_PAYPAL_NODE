import { Router } from "express";
import {
    createPayment,
    capturePayment,
    cancelPayment,
} from "../controllers/payment.js";

const router = Router();

router.get("/create-payment", createPayment);
router.post("/create-payment", createPayment);

router.get("/capture-payment", capturePayment);

router.get("/cancel-payment", cancelPayment);

export default router;