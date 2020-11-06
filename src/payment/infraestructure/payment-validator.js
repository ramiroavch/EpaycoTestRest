const {check,validationResult} = require ('express-validator');

exports.resultPaymentValidator =(req,res,next)=>{
    const result = validationResult(req)
    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        return res.status(400).json({success:false, error:error})

    }
    next();
}

exports.makePaymentValidator= [
    check('document')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client document is required'),
    check('amount')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Payment amount is required')
]

exports.authPayment=[
    check('document')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client document is required'),
    check('token')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Payment token is required')
]