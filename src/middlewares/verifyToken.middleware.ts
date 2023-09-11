import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { UserSession } from "../models/sessions.model";

export const verifyJwtToken = async(req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        const decode:any  = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        let sessionCheck = await UserSession.findOne({user_id: decode.id});
        if(sessionCheck.is_active){
            next();
        }else{
            res.status(400).json({message: "you are logged out please login to access thi sservice"});
        }
    } catch (error) {
        console.error("error in verifying access token",error.message);
        res.status(500).json({message: 'jwt Expired'});
    }

}