import connectDB from "../../utils/connectDB";
import {getSession} from "next-auth/react";
import User from "../../models/User";
import {verifyPassword} from "../../utils/auth";

async function handler(req, res) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err)
        return res.status(200).json({status: "failed", message: "Error in Connecting to DB"})
    }

    const session = await getSession({req})
    if (!session) {
        return res.status(401).json({status: "failed", message: "You are not logged in!"})
    }

    const user = await User.findOne({email: session.user.email})
    if (!user) {
        return res.status(404).json({status: "failed", message: "User  doesn't exist!"})
    }

    if (req.method === "POST") {
        const {name, lastName, password} = req.body;
        const isValid = await verifyPassword(password, user.password)

        if (!isValid) {
            return res.status(422).json({status: "failed", message: "Password is incorrect!"})
        }
        user.name = name;
        user.lastName = lastName;
        user.save();

        res.status(200).json({status: "success", data: {name, lastName, password}})
    } else if (req.method === "GET") {
        return res.status(200).json({
            status: "success",
            data: {name: user.name, lastName: user.lastName, email: user.email}
        })

    } else if (req.method === "PATCH") {
        const {name, lastName, email} = req.body;
        if (!name || !lastName || !email) {
            return res.status(422).json({status: "failed", message: "Invalid Data"})
        }
    }
    const {name, lastName, email} = req.body;
    const result = await User.updateOne(
        {_id: user._id},
        {$set: {name, lastName, email}})
    console.log(result);
    res.status(200).json({status: "success"})
    return result;
};

export default handler;
