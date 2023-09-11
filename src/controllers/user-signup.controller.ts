import { Request, Response } from "express";
import { createNewUser, isUserExist } from "../services/signup.services";


export const signupController = async (req: Request, res: Response) => {
    try {
        const {first_name, last_name, username, email, mobile_number, password, dob} = req.body;        
        if(req.body == undefined){
            res.status(400).json({message: "Bad Request"});
        }else{
            let result = await isUserExist(email);
            if(!result){
                await createNewUser(first_name, last_name, username, email, mobile_number, password, dob);
                res.status(200).json({message:'user created successfully, Please open your email and verify your email id'})
            }else{
                res.status(result.errorCode).json(result.errorMessage);
            }
        } 
    } catch (error) {
        console.error("An error occur" , error)
        res.status(424).json({error});
    }
}

