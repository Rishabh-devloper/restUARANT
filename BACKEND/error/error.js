class ErrorHandler extends Error{
    constructor(message , statuscode) {
        super(message)
        this.statuscode = statuscode
    }
} 

export const errMiddleware = (err , req , res , next) => {

    err.message = err.message || ' Internal Server Error '
    err.statuscode = err.statuscode || 500

    return res.statuscode(err.statuscode).json({
        sucess : false ,
        message : err.message,
    })

}
export default ErrorHandler