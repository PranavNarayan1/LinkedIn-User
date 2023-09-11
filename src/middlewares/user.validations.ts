import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const newUserValidate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const userSchema = Joi.object({

            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            username: Joi.string().required(),
            email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required(),
            mobile_number: Joi.number().required(),
            password: Joi.string().min(8).required(),
            dob: Joi.date().required(),
            about: Joi.string().optional(),
            profile_picture: Joi.string().optional(),
            connection_count: Joi.number().optional(),
            education: Joi.array().optional(),
            skillS: Joi.array().optional(),
            working_in: Joi.object().optional(),
            designation: Joi.string().optional(),
            start_date: Joi.date().optional(),
            end_date: Joi.date().optional()

        });
        const result = userSchema.validate(req.body);
        if(result.error){
            console.log(result.error);
        }else{
            next();
        }

    } catch (error) {

        console.log("Error in registring the user",error);
        res.status(400).json({message: "Error in registering new user"});
        
    }

}

export const validateLoginUsingEmail =async (req:Request, res: Response, next: NextFunction) => {
    
    try {
        
        const loginSchema = Joi.object({
            email : Joi.string().required(),
            password: Joi.string().required()
        });
        const result = loginSchema.validate(req.body);
        if(result.error){
            console.log(result.error)
        }else{
            next();
        }

    } catch (error) {
        console.log("There is some error", error);
        res.status(400).json({message: "Error in logging in"});
    }

}


