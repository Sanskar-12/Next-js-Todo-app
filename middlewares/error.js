export const ErrorHandler=(res,statusCode,message)=>{
    res.status(statusCode).json({
        success:true,
        message
    })
}

export const catchAsyncError=(passedFunc)=>(req,res)=>{
    return Promise.resolve(passedFunc(req,res)).catch((err)=>{
        ErrorHandler(res,500,err.message)
    })
}