import createToken from "../utilities/createToken.js";

export default async function signIn(req, res){
    const query = res.locals.query;
    try{
        const token = createToken(query);
        return res.status(200).send({token: token});
    } catch(error){
        return res.status(500).send(error)
    }
};