const database = require('../modules/userdetailsschema');
const comparepasswordfunction = require('../helpers/comparpassword');
const logincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const finduser = await database.findOne({ email })
            if (finduser) {
                const hashingpassword = finduser.password;
                const comparpassword = await comparepasswordfunction(password, hashingpassword);
                if (comparpassword) {
                    const token = await finduser.generatetokens();
                    res.cookie('jwttokens',token)
                    res.status(200).send('Login Sucessfully');

                }
                else {
                    res.status(400).send('Invalid login details');

                }
            }
            else {
                res.status(400).send('Invalid login details');
            }



        }
        else {
            res.status(500).send('All field require');

        }
    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }

}
module.exports = logincontrollers;