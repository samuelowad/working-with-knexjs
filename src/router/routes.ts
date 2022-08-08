import { Router } from "express";

import * as articleController from "../controllers/article.controller";

const router = Router();

router.get("/articles", articleController.getAll);
router.get("/article/:id", articleController.getById);
router.put("/article/:id", articleController.updateArticle);
router.post("/article", articleController.createArticle);
router.delete("/article/:id", articleController.deleteArticle);

export default router;
