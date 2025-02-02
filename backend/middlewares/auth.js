import catchAsyncErrors from "./catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

//Checks if user is authenticated or not 
export const isAuthenticatedUser = catchAsyncErrors(async (req,res,next) => {
   const {token} =  req.cookies;

   if(!token){
    return next(new ErrorHandler('Login first to access this resource',401));
   }

   const decoded =jwt.verify(token,process.env.JWT_SECRET);
   req.user = await UserActivation.findById(decoded.id)
   next();
});