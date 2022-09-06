import { getUserByEmail } from "../repositories/usersRepository.js";
import passwordDecrypter from "../utils/passwordDecrypter"
import {NextFunction, Request, Response } from "express";

export default async function signInValidator(req: Request, res: Response, next: NextFunction){ 
    const body = req.body;    
    try{
        const {rows: result} = await getUserByEmail(body.email);

        if(result.length === 0){
            return res.sendStatus(401);
        } else {
            const isValidPassword = passwordDecrypter(body.password, result[0].password);            
            
            if(!isValidPassword){
                return res.sendStatus(401);
            }
        }

        delete result[0].password;
        res.locals.query = result[0];
        next();

    } catch(error){
        return res.status(500).send(error);
    }
}

