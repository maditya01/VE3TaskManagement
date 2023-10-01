import query from '../models/db.js'
export const signupUser = async (req, res) => {
    const details = req.body;
    console.log(details);
    try {
        const row = await query(`INSERT INTO users (username, useremail, userpassword) values ('${details.username}', '${details.useremail}', '${details.userpassword}')`);
        if (row.affectedRows) {
            res.status(200).json({ message: "succesfully user has been created!!!" });
        }
    } catch (error) {
        console.log(error);
    }
}
export const signinUser = async (req, res) => {
    const details = req.body;
    console.log(details);
    try {
        const row = await query(`SELECT useremail,userpassword from users where useremail = '${details.useremail}' `)
        console.log(row.length);
        if (row.length > 0 && details.userpassword === row[0].userpassword) {
            console.log("same password!!!")
            res.status(200).json({ message: 'successfully authenticated!!!' });
        } else {
            res.status(409).json({ message: 'Login failure please write correct data' })
        }
    } catch (error) {
        console.log(error);
    }

}