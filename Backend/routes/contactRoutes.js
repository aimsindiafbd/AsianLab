import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getAllContacts); // optional for admin

export default router;
