import jsonwebtoken from "jsonwebtoken";

export default function createToken(object){
    const jwt = jsonwebtoken;
    const SECRET_KEY = process.env.JWT_SECRET;
    const token = jwt.sign(object, SECRET_KEY, {expiresIn: '30 minutes'});
    return token;
}