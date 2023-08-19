const bcrypt = require('bcrypt');
const hashingpasswordfunction = async (password) => {
    try {
        const salt = 12;
        const hashingpassword = await bcrypt.hash(password, salt);
        return hashingpassword;
    }
    catch (error) {
        console.log(error);
    }

}
module.exports = hashingpasswordfunction;