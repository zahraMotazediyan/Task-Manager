// import {useEffect, useState} from "react";
// import Tasks from "../module/Tasks";
//
// function HomePage() {
//     const [todos, setTodos] = useState([]);
//     const [description, setDescription] = useState("");
//
//     useEffect(() => {
//         fetchTodos()
//     }, []);
//
//     const fetchTodos = async () => {
//         const res = await fetch("api/todos");
//         const data = await res.json();
//         if (data.status === "success") {
//             setTodos(data.data.todos);
//             setDescription(data.data.description);
//             console.log("descriptionM", data.data.description)
//         }
//     };
//
//     return (
//         <div className="home-page">
//             <div className="home-page--todo">
//                 <p>Todo</p>
//                 <p>{todos.description}</p>
//                 <Tasks
//                     data={todos.todo}
//                     fetchTodos={fetchTodos}
//                     next="inProgress"
//                 />
//             </div>
//             <div className="home-page--inProgress">
//                 <p>In Progress</p>
//                 <p>{todos.description}</p>
//                 <Tasks
//                     data={todos.inProgress}
//                     fetchTodos={fetchTodos}
//                     next="review" back="todo"
//                 />
//             </div>
//             <div className="home-page--review">
//                 <p>Review</p>
//                 <p>{todos.description}</p>
//                 <Tasks
//                     data={todos.review}
//                     fetchTodos={fetchTodos}
//                     next="done" back="inProgress"
//                 />
//             </div>
//             <div className="home-page--done">
//                 <p>Done</p>
//                 <p>{todos.description}</p>
//                 <Tasks
//                     data={todos.done}
//                     fetchTodos={fetchTodos}
//                     back="review"
//                 />
//             </div>
//         </div>
//     )
// }
//
// export default HomePage;

// import { useEffect, useState } from "react";
// import Tasks from "../module/Tasks";
//
// function HomePage() {
//     const [todos, setTodos] = useState({ todo: [], inProgress: [], review: [], done: [] });
//     const [description, setDescription] = useState([]);
//
//     useEffect(() => {
//         fetchTodos();
//     }, []);
//
//     const fetchTodos = async () => {
//         const res = await fetch("api/todos");
//         const data = await res.json();
//         if (data.status === "success") {
//             setTodos(data.data.todos);
//             setDescription(data.data.description); // Set description array
//         }
//     };
//
//     return (
//         <div className="home-page">
//             {/* Todo Section */}
//             <div className="home-page--todo">
//                 <p>Todo</p>
//                 <p>{description.todo}</p> {/* Match description with the Todo section */}
//                 <Tasks
//                     data={todos.todo}
//                     fetchTodos={fetchTodos}
//                     next="inProgress"
//                 />
//             </div>
//
//             {/* In Progress Section */}
//             <div className="home-page--inProgress">
//                 <p>In Progress</p>
//                 <p>{description.inProgress}</p> {/* Match description with In Progress */}
//                 <Tasks
//                     data={todos.inProgress}
//                     fetchTodos={fetchTodos}
//                     next="review"
//                     back="todo"
//                 />
//             </div>
//
//             {/* Review Section */}
//             <div className="home-page--review">
//                 <p>Review</p>
//                 <p>{description.review}</p> {/* Match description with Review */}
//                 <Tasks
//                     data={todos.review}
//                     fetchTodos={fetchTodos}
//                     next="done"
//                     back="inProgress"
//                 />
//             </div>
//
//             {/* Done Section */}
//             <div className="home-page--done">
//                 <p>Done</p>
//                 <p>{description.done}</p> {/* Match description with Done */}
//                 <Tasks
//                     data={todos.done}
//                     fetchTodos={fetchTodos}
//                     back="review"
//                 />
//             </div>
//         </div>
//     );
// }
//
// export default HomePage;

import {useEffect, useState} from "react";
import {Box, Typography, Grid, Paper} from "@mui/material";
import Tasks from "../module/Tasks";

function HomePage() {
    const [todos, setTodos] = useState({todo: [], inProgress: [], review: [], done: []});
    const [description, setDescription] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await fetch("api/todos");
        const data = await res.json();
        if (data.status === "success") {
            setTodos(data.data.todos);
            console.log("data.data.todos", data.data.todos)
            setDescription(data.data.description);
        }
    };

    return (
        <Box sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '100%',
            },
            height: 'auto',
            padding: 3,
        }}>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: 4,
                    color: "#3f47f4",
                    fontSize: {
                        xs: '12px',
                        sm: '18px',
                        md: '14px',
                        lg: '24px',
                        xl: '28px'
                    },
                }}
            >
                Task Management
            </Typography>

            <Grid container spacing={3}>
                {/* Todo Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 2,
                            backgroundColor: "#f9f9f9",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: 2,
                                fontWeight: "bold",
                                color: "#3f47f4",
                                fontSize: {
                                    xs: '12px',
                                    sm: '18px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '20px',
                                },
                            }}
                        >
                            Todo
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                marginBottom: 2,
                                color: "#555",
                            }}
                        >
                            {description.todo}
                        </Typography>
                        <Tasks
                            data={todos.todo}
                            fetchTodos={fetchTodos}
                            next="inProgress"
                        />
                    </Paper>
                </Grid>

                {/* In Progress Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 2,
                            backgroundColor: "#f9f9f9",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: 2,
                                fontWeight: "bold",
                                color: "#3f47f4",
                                fontSize: {
                                    xs: '12px',
                                    sm: '18px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '20px',
                                },
                            }}
                        >
                            In Progress
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{marginBottom: 2, color: "#555"}}
                        >
                            {description.inProgress}
                        </Typography>
                        <Tasks
                            data={todos.inProgress}
                            fetchTodos={fetchTodos}
                            next="review"
                            back="todo"
                        />
                    </Paper>
                </Grid>

                {/* Review Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 2,
                            backgroundColor: "#f9f9f9",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: 2,
                                fontWeight: "bold",
                                color: "#3f47f4",
                                fontSize: {
                                    xs: '12px',
                                    sm: '18px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '20px',
                                },
                            }}
                        >
                            Review
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{marginBottom: 2, color: "#555"}}
                        >
                            {description.review}
                        </Typography>
                        <Tasks
                            data={todos.review}
                            fetchTodos={fetchTodos}
                            next="done"
                            back="inProgress"
                        />
                    </Paper>
                </Grid>

                {/* Done Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 2,
                            backgroundColor: "#f9f9f9",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                marginBottom: 2,
                                fontWeight: "bold",
                                color: "#3f47f4",
                                fontSize: {
                                    xs: '12px',
                                    sm: '18px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '20px',
                                },
                            }}
                        >
                            Done
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{marginBottom: 2, color: "#555"}}
                        >
                            {description.done}
                        </Typography>
                        <Tasks
                            data={todos.done}
                            fetchTodos={fetchTodos}
                            back="review"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;