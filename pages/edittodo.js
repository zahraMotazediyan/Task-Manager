// import {useEffect, useState} from "react";
// import {BsAlignStart} from "react-icons/bs";
// import RadioButton from "../component/element/RadioButton";
// import {FiSettings} from "react-icons/fi";
// import {AiOutlineFileSearch} from "react-icons/ai";
// import {MdDoneAll} from "react-icons/md";
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {useRouter} from "next/router";
// import {CiEdit} from "react-icons/ci";
//
// function EditTodo() {
//     const [title, setTitle] = useState("");
//     const [status, setStatus] = useState("");
//     const [description, setDescription] = useState("");
//
//     const router = useRouter();
//     const {_id} = router.query;
//
//     useEffect(() => {
//         if (_id) {
//             const loadTodo = async () => {
//                 const res = await fetch(`/api/todos`);
//                 const data = await res.json();
//
//                 if (data.status === "success" && data.data) {
//                     const todo = data.data.todos.find((item) => item._id === _id);
//                     if (todo) {
//                         setTitle(todo.title);
//                         setStatus(todo.status);
//                         setDescription(todo.description);
//                     }
//                 }
//             };
//             loadTodo();
//         }
//     }, [_id]);
//
//     const editHandler = async () => {
//         const res = await fetch("/api/todos", {
//             method: "PATCH",
//             body: JSON.stringify({
//                 _id, // Send the _id to identify which todo to update
//                 title,
//                 status,
//                 description,
//             }),
//             headers: {"Content-Type": "application/json"},
//         });
//         console.log("_id", _id)
//         const data = await res.json();
//         if (data.status === "success") {
//             toast.success("Todo updated successfully!");
//             await router.replace("/");
//         } else {
//             toast.error("Failed to update todo.");
//         }
//     };
//
//     return (
//         <div className="add-form">
//             <h2>
//                 <CiEdit/>
//                 Edit Todo
//             </h2>
//             <div className="add-form__input">
//                 <div className="add-form__input--first">
//                     <label htmlFor="title">Title :</label>
//                     <input
//                         id="title"
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <label htmlFor="description">Description :</label>
//                     <input
//                         id="description"
//                         type="text"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </div>
//                 <div className="add-form__input--second">
//                     <RadioButton
//                         status={status}
//                         setStatus={setStatus}
//                         value="todo"
//                         title="Todo">
//                         <BsAlignStart/>
//                     </RadioButton>
//                     <RadioButton
//                         status={status}
//                         setStatus={setStatus}
//                         value="inProgress"
//                         title="InProgress">
//                         <FiSettings/>
//                     </RadioButton>
//                     <RadioButton
//                         status={status}
//                         setStatus={setStatus}
//                         value="review"
//                         title="Review">
//                         <AiOutlineFileSearch/>
//                     </RadioButton>
//
//                     <RadioButton
//                         status={status}
//                         setStatus={setStatus}
//                         value="done"
//                         title="Done">
//                         <MdDoneAll/>
//                     </RadioButton>
//                 </div>
//                 <button onClick={editHandler}>Save</button>
//             </div>
//             <ToastContainer/>
//         </div>
//     );
// }
//
// export default EditTodo;


import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {
    Box,
    Button,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper,
    Grid,
} from "@mui/material";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsAlignStart} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {AiOutlineFileSearch} from "react-icons/ai";
import {MdDoneAll} from "react-icons/md";
import {CiEdit} from "react-icons/ci";

function EditTodo() {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();
    const {_id} = router.query;

    useEffect(() => {
        if (_id) {
            const loadTodo = async () => {
                const res = await fetch(`/api/todos`);
                const data = await res.json();

                if (data.status === "success" && data.data) {
                    const todo = data.data.todos.find((item) => item._id === _id);
                    if (todo) {
                        setTitle(todo.title);
                        setStatus(todo.status);
                        setDescription(todo.description);
                    }
                }
            };
            loadTodo();
        }
    }, [_id]);

    const editHandler = async () => {
        const res = await fetch("/api/todos", {
            method: "PATCH",
            body: JSON.stringify({
                _id,
                title,
                status,
                description,
            }),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if (data.status === "success") {
            toast.success("Todo updated successfully!");
            await router.replace("/");
        } else {
            toast.error("Failed to update todo.");
        }
    };

    return (
        <Box
            sx={{
                maxWidth: "600px",
                margin: "auto",
                padding: 4,
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            component={Paper}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    marginBottom: 4,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    color: "#3f47f4",
                }}
            >
                <CiEdit/> Edit Todo
            </Typography>

            <Box sx={{marginBottom: 3}}>
                <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)}
                    sx={{marginBottom: 2}}
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)}
                />
            </Box>

            <Box sx={{marginBottom: 4}}>
                <Typography variant="subtitle1" sx={{marginBottom: 2, fontWeight: "bold"}}>
                    Status:
                </Typography>
                <RadioGroup
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value)}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                        gap: 2,
                    }}
                >
                    <FormControlLabel
                        value="todo"
                        control={<Radio/>}
                        label={
                            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                <BsAlignStart/> Todo
                            </Box>
                        }
                    />
                    <FormControlLabel
                        value="inProgress"
                        control={<Radio/>}
                        label={
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1, fontSize: "10px",
                                    fontWeight: "500"
                                }}>
                                <FiSettings/> In Progress
                            </Box>
                        }
                    />
                    <FormControlLabel
                        value="review"
                        control={<Radio/>}
                        label={
                            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                <AiOutlineFileSearch/> Review
                            </Box>
                        }
                    />
                    <FormControlLabel
                        value="done"
                        control={<Radio/>}
                        label={
                            <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                                <MdDoneAll/> Done
                            </Box>
                        }
                    />
                </RadioGroup>
            </Box>

            <Box sx={{textAlign: "center"}}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={editHandler}
                    sx={{
                        backgroundColor: "#3f47f4",
                        paddingX: 5,
                        "&:hover": {
                            backgroundColor: "#2c38d1",
                        },
                    }}
                >
                    Save
                </Button>
            </Box>

            <ToastContainer/>
        </Box>
    );
}

export default EditTodo;

