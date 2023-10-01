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
export const signinUser = () => { }