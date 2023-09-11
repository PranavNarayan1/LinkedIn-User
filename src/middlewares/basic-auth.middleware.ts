import base64 from 'base-64';
import {Request, Response, NextFunction} from 'express';
import dotenv from'dotenv';

dotenv.config();




const decodeCredentials = async(authHeader: any) => {
    const encodedCredentials = authHeader.trim().replace(/Basic\s+/i,'');
    const decodedCredentials = base64.decode(encodedCredentials);
    return decodedCredentials.split(':');
}

export const authMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    const [username, password] = await decodeCredentials(req.headers.authorization || '');
    if(username == process.env.USERNAMES && password == process.env.PASSWORD){
        return next();
    }
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.status(401).send('Basic authentication required.');
}