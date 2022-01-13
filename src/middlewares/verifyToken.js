import TokenAuth from "../helpers/tokenAuth";
import  userInfoS  from "../models/user";




 const isUserExist=async(req,res,next)=>{
     try{
         
         const token=req.header("x-auth-token");
         if(!token){
         return res.status(400).json({error:"no token provided"})

     }
     const data=TokenAuth.decodeToken(token);
    //  console.log(data)
    //  const data=TokenAuth.decodeToken(token);
     const{name}=data;
     if(name=="JsonWebTokenError"){
         return res.status(400).json({error:"invalid  JWT token"})
     }
     if(name=="TokenExpiredError "){
        return res.status(400).json({error:" token Expired"})

     }

     req.user=data.user;
     const user = await userInfoS.findById(req.user._id);
     if(!user) {
        return res.status(400).json({error:" User not found , your not AUthorised"});
         
     }
     return next();

    }

    catch(err){
        console.log(err);

    }


 }
 export default isUserExist;