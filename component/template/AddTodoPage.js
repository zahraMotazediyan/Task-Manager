// import {GrAddCircle} from "react-icons/gr";
// import {BsAlignStart} from "react-icons/bs";
// import {useState} from "react";
// import RadioButton from "../element/RadioButton";
// import {FiSettings} from "react-icons/fi";
// import {AiOutlineFileSearch} from "react-icons/ai";
// import {MdDoneAll} from "react-icons/md";
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//
// function AddTodoPage() {
//
//     const [title, setTitle] = useState("");
//     const [status, setStatus] = useState("todo");
//     const [description, setDescription] = useState("");
//
//     const addHandler = async () => {
//         const res = await fetch("/api/todos", {
//             method: "POST",
//             body: JSON.stringify({title, status, description}),
//             headers: {"Content-Type": "application/json"}
//         });
//         const data = await res.json();
//         if (data.status === "success") {
//             setTitle("")
//             setStatus("todo")
//             setDescription("")
//             toast.success("Todo added!")
//         }
//     };
//
//     return (
//         <div className="add-form">
//             <h2>
//                 <GrAddCircle/>
//                 Add New Todo
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
//                 <button onClick={addHandler}>Add</button>
//             </div>
//             <ToastContainer/>
//         </div>
//     )
// };
//
// export default AddTodoPage;

import {useState} from "react";
import {GrAddCircle} from "react-icons/gr";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Grid,
} from "@mui/material";

function AddTodoPage() {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");
    const [description, setDescription] = useState("");

    const addHandler = async () => {
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({title, status, description}),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if (data.status === "success") {
            setTitle("");
            setStatus("todo");
            setDescription("");
            toast.success("Todo added!");
        }
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: "100vh", // Full height for centering
                backgroundColor: "#f4f5fa",
                padding: "0 20px", // Ensure spacing on small screens
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    <GrAddCircle style={{marginRight: "8px"}}/>
                    Add New Todo
                </Typography>

                <FormControl fullWidth sx={{mb: 3}}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </FormControl>

                <FormControl component="fieldset" fullWidth sx={{mb: 3}}>
                    <Typography variant="subtitle1" gutterBottom>
                        Status:
                    </Typography>
                    <RadioGroup
                        row
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <FormControlLabel
                            value="todo"
                            control={<Radio/>}
                            label={
                                <Typography display="flex" alignItems="center">
                                    Todo
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="inProgress"
                            control={<Radio/>}
                            label={
                                <Typography display="flex" alignItems="center">
                                    InProgress
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="review"
                            control={<Radio/>}
                            label={
                                <Typography display="flex" alignItems="center">
                                    Review
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="done"
                            control={<Radio/>}
                            label={
                                <Typography display="flex" alignItems="center">
                                    Done
                                </Typography>
                            }
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={addHandler}
                    sx={{
                        backgroundColor: "#3f47f4",
                        color: "white",
                        padding: "10px 0",
                        "&:hover": {backgroundColor: "#303f9f"},
                    }}
                >
                    Add
                </Button>

                <ToastContainer/>
            </Box>
        </Grid>
    );
}

export default AddTodoPage;

