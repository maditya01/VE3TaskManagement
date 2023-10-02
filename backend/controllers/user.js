import query from '../models/db.js'
import bcrypt from 'bcryptjs';

export const signupUser = async (req, res) => {
    const { username, useremail, userpassword } = req.body;
    try {
        const prevR = await query(`select useremail from users where useremail = '${useremail}'`);
        if (prevR.length === 0) {
            const hashedPassword = await bcrypt.hash(userpassword, 6);
            const row = await query(`INSERT INTO users (username, useremail, userpassword) values ('${username}', '${useremail}', '${hashedPassword}')`);
            if (row.affectedRows) {
                res.status(200).json({ message: "succesfully user has been created!!!" });
            }
        } else {
            res.status(404).json({ message: "Already registered mailId" });
        }
    } catch (error) {
        res.status(404).json({ message: "please correct sign-up data" });
        console.log(error);
    }
}
export const signinUser = async (req, res) => {
    const { username, useremail, userpassword } = req.body;
    try {
        const row = await query(`SELECT useremail,userpassword from users where useremail = '${useremail}' `)
        if (row.length > 0) {
            const isPasswordCorrect = await bcrypt.compare(
                userpassword,
                row[0].userpassword
            );
            if (isPasswordCorrect) {
                res.status(200).json({ message: 'successfully authenticated!!!' });
            }else{
                return res.status(400).json({ message: "Invalid Credentials" });
            }
        } else {
            res.status(409).json({ message: 'Login failure please write correct data' })
        }
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: 'Login failure please write correct data' })
    }
}