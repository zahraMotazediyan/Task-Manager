// import connectDB from "../../utils/connectDB";
// import {getSession} from "next-auth/react";
// import User from "../../models/User";
// import {sortTodos} from "../../utils/sortTodos";
//
// async function handler(req, res) {
//
//     try {
//         await connectDB();
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({status: "failed", message: "Error in connecting to DB"});
//     }
//
//     const session = await getSession({req});
//     if (!session) {
//         return res.status(401).json({status: "failed", message: "You are not logged in!"})
//     }
//     const user = await User.findOne({email: session.user.email})
//
//     if (!user) {
//         return res.status(422).json({status: "failed", message: "User does not exist!"})
//     }
//
//     if (req.method === "POST") {
//         const {title, status, description} = req.body;
//
//         if (!title || !status || !description) {
//             return res.status(422).json({status: "failed", message: "inValid Data"})
//         }
//
//         user.todos.push({title, status, description});
//         user.save();
//         return res.status(201).json({status: "success", message: "Todo Created"})
//     } else if (req.method === "GET") {
//         const sortData = sortTodos(user.todos);
//         const description = user.todos.map(todo => ({
//             description: todo.description
//         }));
//         return res.status(200).json({
//             status: "success",
//             data: {todos: sortData, description}
//         })
//     } else if (req.method === "PATCH") {
//         const {_id, title, status, description} = req.body;
//         console.log("Request Body:", req.body);
//         if (_id || !title || !status || !description) {
//             return res.status(422).json({status: "failed", message: "Invalid Data"})
//         }
//
//         console.log("Frontend ID:", id, "Status:", status); // Frontend
//         console.log("Backend Body:", req.body);           // Backend
//
//         const result = await User.updateOne(
//             {"todos._id._id": _id},
//             {
//                 $set: {
//                     "todos.$.title": title,
//                     "todos.$.description": description,
//                     "todos.$.status": status,
//                 }
//             }
//         );
//         console.log("User Todos:", user.todos);
//         console.log("g", user.todos._id)
//         console.log("resultA", result)
//         res.status(200).json({status: "success", message: "Todo updated"})
//         return result;
//     }
// };
//
// export default handler;


import connectDB from "../../utils/connectDB";
import {getSession} from "next-auth/react";
import User from "../../models/User";
import {sortTodos} from "../../utils/sortTodos";

async function handler(req, res) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err)
        return res.status(500).json({status: "failed", message: "Error in connecting to DB"});
    }

    const session = await getSession({req});
    if (!session) {
        return res.status(401).json({status: "failed", message: "You are not logged in!"})
    }
    const user = await User.findOne({email: session.user.email})

    if (!user) {
        return res.status(422).json({status: "failed", message: "User does not exist!"})
    }
    console.log()
    if (req.method === "POST") {
        const {title, status, description} = req.body;

        if (!title || !status || !description) {
            return res.status(422).json({status: "failed", message: "inValid Data"})
        }

        user.todos.push({title, status, description});
        user.save();
        return res.status(201).json({status: "success", message: "Todo Created"})
    } else if (req.method === "GET") {
        const sortData = sortTodos(user.todos);
        const description = user.todos.map(todo => ({
            description: todo.description
        }));
        return res.status(200).json({
            status: "success",
            data: {todos: sortData, description}
        })
    } else if (req.method === "PATCH") {
        const {_id, title, status, description} = req.body;
        if (!_id || !title || !status || !description) {
            return res.status(422).json({status: "failed", message: "Invalid Data"})
        }

        const result = await User.updateOne(
            {"todos._id._id": _id},
            {
                $set: {
                    "todos.$.title": title,
                    "todos.$.description": description,
                    "todos.$.status": status,
                }
            }
        );

       res.status(200).json({status: "success", message: "Todo updated"})
        return result;
    }
};

export default handler;