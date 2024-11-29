import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    lastName: String,
    todos: [{title: String, status: String,description:String}],
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});

const User = models && (models.User || model("User", userSchema));

export default User;