import { getUserByEmail } from "../repositories/usersRepositories";
import {NextFunction, Request, Response } from "express";

export default async function signUpValidator(req: Request, res: Response, next: NextFunction){
   
    const body = req.body;
  
    try{
        const email = await getUserByEmail(body.email);
        
        if(email){
            return res.sendStatus(401);
        } else {
            next();
        }
        
    } catch(error){
        return res.status(501).send(error);
    }
};