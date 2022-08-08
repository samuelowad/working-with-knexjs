import { Response } from "express";

class JSONResponse {
  static success(res: Response, data) {
    res.status(200).json({
      data,
    });
  }

  static notFound(res: Response, data) {
    res.status(404).json({
      data,
    });
  }

  static badRequest(res: Response, message?: string, data?) {
    res.status(400).json({
      message,
      data,
    });
  }
}

export default JSONResponse;
