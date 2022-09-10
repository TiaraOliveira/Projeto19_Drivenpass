import { getUserByEmail } from "../repositories/usersRepositories";
import passwordDecrypter from "../utils/passwordDecrypter"
import {NextFunction, Request, Response } from "express";

export default async function signInValidator(req: Request, res: Response, next: NextFunction){ 
    console.log("oi")
    const body = req.body;  
    try{
        const result = await getUserByEmail(body.email);
        if(!result){
            return res.send("aaa");
        } else {
            const isValidPassword = passwordDecrypter(body.password, result.password);            
            if(!isValidPassword){
                return res.sendStatus(401);
            }
        }

       
        res.locals.query = result;
        next();

    } catch(error){
        return res.status(500).send(error);
    }
}

