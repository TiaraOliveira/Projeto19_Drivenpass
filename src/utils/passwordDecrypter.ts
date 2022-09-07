import bcrypt from 'bcrypt';

export default function passwordDecrypter(password:string, ecryptedPassword: string){
    const decryptPassword = bcrypt.compareSync(password, ecryptedPassword);
    console.log(`aqi ${decryptPassword}`)
    return decryptPassword;
}