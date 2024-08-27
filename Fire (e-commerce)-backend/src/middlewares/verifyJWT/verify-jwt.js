import jwt from "jsonwebtoken"


export const verifyUserJWT = (req,res,next)=>{
    const authHeader = req.headers.authorization ||req.headers.Authorization
  if(!authHeader?.startsWith("Bearer ")){
    res.status(401);

    throw new Error(`Unauthorized`);
    
  } 

  const token = authHeader.split(" ")[1];

  jwt.verify(token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded) => {
        if(err){
          res.status(403)

          throw new Error(`Forbidden user`);
          
        } 
       
        req.user = decoded?.authInfo;
        next();

    }
  )



}

export const AdminVerifyJWT = (req,res,next)=>{
  const authHeader = req.headers.authorization ||req.headers.Authorization
if(!authHeader?.startsWith("Bearer ")){
  res.status(401);

  throw new Error(`Unauthorized`);
  
} 

const token = authHeader.split(" ")[1];

jwt.verify(token,
  process.env.ACCESS_TOKEN_SECRET,
  (err,decoded) => {

    

    
      if(err){
        res.status(403)

        throw new Error(`Forbidden admin -${err}`);
        
      }
      
      if(decoded?.authInfo?.isAuthorized){

        req.admin = decoded?.authInfo;
        
        next();
        
      }else{
        res.status(403);

      throw new Error(`You are not an admin`);
      }
     
     
      
  }
)



}