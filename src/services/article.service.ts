import connection from "../database/connection";
import { Article } from "../interfaces/article.interface";
import { CreateArticleInterface } from "../interfaces/create-article.interface";

class ArticleService {
  async createArticle(article: Partial<Article>): Promise<Article> {
    return connection("articles")
      .insert(article)
      .returning("*")
      .then(([article]) => article);
  }

  async getAll(): Promise<Article[]> {
    return connection("articles")
      .select("*")

      .then((articles) => articles);
  }
  async getById(id: number): Promise<Article> {
    console.log(id);

    return (
      connection("articles")
        //   .select("*")
        .where(" id", id)
        .then(([article]) => article)
    );
  }
  async updateArticle(article: Partial<Article>): Promise<Article> {
    const { id } = article;
    delete article.id;
    article.updated_at = new Date();
    return connection("articles")
      .update(article)
      .where({ id })
      .returning("*")
      .then(([article]) => article);
  }

  async deleteArticle(id: number): Promise<Article> {
    return connection("articles")
      .delete()
      .where({ id })
      .returning("*")
      .then(([article]) => article);
  }
}

export default new ArticleService();
