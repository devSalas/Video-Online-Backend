//esto es un ejemplo de como usar el controllador

import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getUser = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERRROR_GET_USER");
  }
};

export { getUser };
