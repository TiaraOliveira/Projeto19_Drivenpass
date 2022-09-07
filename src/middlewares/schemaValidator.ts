import { NextFunction, Request, Response } from "express";


export function schemaValidator(schema:any) {
  return (req: Request, res: Response, next:NextFunction) => { 
      const body = req.body;  
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        return res.status(422).send(error.details.map((detail: { message: any; }) => detail.message));
      }
  
      next();
    }
  }