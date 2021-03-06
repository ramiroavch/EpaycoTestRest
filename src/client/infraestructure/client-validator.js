const {check,validationResult} = require ('express-validator');

exports.resultRegisterValidator =(req,res,next)=>{
    const result = validationResult(req)
    if(!result.isEmpty()){
        const error = result.array()[0].msg;
        return res.status(400).json({success:false, error:error})

    }
    next();
}

exports.registerValidator = [
    check('document')
        .isString()
        .withMessage("document debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client document is required'),
    check('name')
        .isString()
        .withMessage("name debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client name is required'),
    check('lastname')
        .isString()
        .withMessage("lastname debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client lastname is required'),
    check('email')
        .isString()
        .withMessage("email debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client email is required')
        .isEmail()
        .withMessage('Invalid email'),
    check('phone')
        .isString()
        .withMessage("phone debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client phone is required')
]

exports.payWalletValidator = [
    check('document')
        .isString()
        .withMessage("document debe ser un string")
        .trim()
        .not()
        .isEmpty()
    .withMessage('Client document is required'),
    check('phone')
        .isString()
        .withMessage("phone debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client phone is required'),
    check('amount')
        .not()
        .isString()
        .withMessage("El valor no puede ser un String")
        .not()
        .isEmpty()
        .withMessage('Recharge Amount is required')
]

exports.consultWallet = [
    check('document')
        .isString()
        .withMessage("document debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Client document is required'),
    check('phone')
        .isString()
        .withMessage("phone debe ser un string")
        .trim()
        .not()
        .isEmpty()
        .withMessage('Phone document is required')
]