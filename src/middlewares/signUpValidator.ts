import { getUserByEmail, getUserByUserName } from "../repositories/usersRepository.js";
import {NextFunction, Request, Response } from "express";

export default async function signUpValidator(req: Request, res: Response, next: NextFunction){
   
    const body = req.body;
    
    try{
        const {rows: email} = await getUserByEmail(body.email);
        const {rows: userName} = await getUserByUserName(body.userName);

        if(email.length !== 0 || userName.length !== 0){
            return res.sendStatus(401);
        } else {
            next();
        }
        
    } catch(error){
        return res.status(501).send(error);
    }
};