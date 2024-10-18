const userModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateTokens')

//register user
module.exports.registerUser = async function(req, res) {
    const {name, email, password} = req.body;

    try {
        let user = await userModel.findOne({email})
        if(user){
            return res.status(400).send('account already exists, please login')
        }
    
        let salt = await bcrypt.genSalt()
        let hashed = await bcrypt.hash(password, salt)
        user = await userModel.create({email, password: hashed, name});
    
        let token = generateToken({email})
    
        res.cookie('token', token, {httpOnly: true, secure: true, maxAge: 30*24*60*60*1000});
    
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//login user
module.exports.loginUser = async function(req, res) {
    const {email, password} = req.body;
    try {
        let user = await userModel.findOne({email})

    if(!user){
        return res.status(400).send('account not found, please register first')
    }

    let result = await bcrypt.compare(password, user.password)
    if(result){
        let token = generateToken({email})

        res.cookie('token', token, {httpOnly: true, secure: true, maxAge: 30*24*60*60*1000});
    
        res.status(201).send('logged in successfully');
    }
    else{
        return res.status(400).send('email or password is incorrect, please try again')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports.logoutUser = function(req, res) {
    res.cookie('token', '', {httpOnly: true});

    res.status(201).send('Logged out successfully')
}


module.exports.getUserProfile = function(req, res) {
    console.log(req.user)
    res.send('Logged in successfully')
}