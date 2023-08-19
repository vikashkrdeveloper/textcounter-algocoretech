const database = require('../db/connection');
const jwt=require('jsonwebtoken');
const userdetailsschema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true

    },
    phone: {
        type: Number,
        trim: true,
        unique: true

    },
    address: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String,
                lowercase: true,
                trim: true
            }
        }
    ]
}, { timestamps: true });
userdetailsschema.methods.generatetokens = async function () {
    try {
        const token =await jwt.sign({_id:this._id.toString()},process.env.SECERTY_KEY);
        this.tokens=this.tokens.concat({"token":token});
        this.save();
        return token;
    }
    catch (error) {
        console.log(error);
    }

}

const userdetailsmodels= database.model('registration',userdetailsschema);
module.exports = userdetailsmodels;