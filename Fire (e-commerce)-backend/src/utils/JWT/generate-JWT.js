import jwt from "jsonwebtoken";

////AccessToken
export const generateAccessToken = ( user) => {

    

   const accessToken = jwt.sign(

    {
        "authInfo":{
            
                "email":user.email,
                'userId':user._id  ,
                "isAuthorized":user.isAuthorized,
        }
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn :"15m"}
   )

   return accessToken;
}


////RefreshToken

export const generateRefreshToken = (res,user) =>{
    const refreshToken = jwt.sign(
        {
            "email":user.email,
            'userId':user._id ,
            "IsAuthorized":user.isAuthorized,
        },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn :"7d"}
    
       )
    
       res.cookie(user.isAuthorized?"jwtAdmin":"jwtUser",refreshToken,{
        httpOnly:true,
        maxAge:24*60*60*1000,
       
        sameSite:"strict",
       })
}

