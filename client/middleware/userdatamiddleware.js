const jwt = require('jsonwebtoken');
const database = require('../modules/userdetailsschema');
const userdatamiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verification = await jwt.verify(token, process.env.SECERTY_KEY);
        const rootUser = await database.findOne({ _id: verification._id, 'tokens.token': token });
        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.Userid = rootUser._id;
        next();

    }
    catch (error) {
        res.status(404).send('User not login');
    }

}

module.exports = userdatamiddleware;