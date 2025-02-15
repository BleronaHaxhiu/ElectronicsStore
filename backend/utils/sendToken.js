//Create token and save in the cookie
export default (user,statusCode ,res) => {
    //Create JWT token 
    const token = user.getJwtToken() 

    //Options for cookies 
    const options = {
        expires : new Date (Date.now() = process.env.COOKIE_EXPIRES_TIME *24*60*60*1000),
            httpOnly :true

    };
    console.log(options);

    res.status(statusCode).cookie("token",token,options).sjon({
        token,
    });
};