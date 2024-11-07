class ErrorHandler extends Error{
  constructor(message,statusCode){
    super(message);
    this.statusCode=statusCode
  }
}

export const errorMiddleware=(err,req,res,next)=>{
  err.message=err.message || "internal server error!"

return res.status(err.statusCode).json({
  success:false,
  message:err.message,
})

}

export default ErrorHandler;