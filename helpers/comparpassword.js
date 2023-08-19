const bcrypt = require('bcrypt');
const comparepasswordfunction =async (password,hashpassword) => {
    try {
        const comparepassword=await bcrypt.compare(password,hashpassword);
        return comparepassword;

    }
    catch (error) {
        console.log(error)
    }

}
module.exports = comparepasswordfunction;