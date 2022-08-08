import { Request, Response } from "express";
import ArticleService from "../services/article.service";
import JSONResponse from "../libs/json-response";

export async function getAll(req: Request, res: Response) {
  const articles = await ArticleService.getAll();

  JSONResponse.success(res, articles);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  if (!id) {
    return JSONResponse.badRequest(res, "Missing id");
  }
  const article = await ArticleService.getById(Number(id));

  JSONResponse.success(res, article);
}

export async function createArticle(req: Request, res: Response) {
  console.log(req.body);

  const { heading, content } = req.body;
  if (!heading || !content) {
    return JSONResponse.badRequest(res, "Missing required fields");
  }
  const articleData = { heading, content };
  try {
    const article = await ArticleService.createArticle(articleData);
    JSONResponse.success(res, article);
  } catch (err) {
    JSONResponse.badRequest(res, "error occurred");
  }
}

export async function updateArticle(req: Request, res: Response) {
  let { id } = req.params;
  const { heading, content } = req.body;
  if (!id || !heading || !content) {
    return JSONResponse.badRequest(res, "Missing required fields");
  }
  const articleData = { heading, content, id: Number(id) };
  try {
    const article = await ArticleService.updateArticle(articleData);
    JSONResponse.success(res, article);
  } catch (err) {
    console.log(err);

    JSONResponse.badRequest(res, "error occurred");
  }
}

export async function deleteArticle(req: Request, res: Response) {
  let { id } = req.params;
  if (!id) {
    return JSONResponse.badRequest(res, "Missing id");
  }
  const article = await ArticleService.deleteArticle(Number(id));

  JSONResponse.success(res, article);
}
