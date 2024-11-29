// import {RiMastodonLine} from "react-icons/ri";
// import {BiRightArrow, BiLeftArrow} from "react-icons/bi";
// import Link from "next/link";
// import {CiEdit} from "react-icons/ci";
//
// function Tasks({data, next, back, fetchTodos}) {
//     const changeStatus = async (id, status) => {
//         const res = await fetch("/api/todos", {
//             method: "PATCH",
//             body: JSON.stringify({id, status}),
//             headers: {"Content-Type": "application/json"},
//         });
//         const data = await res.json();
//         if (data.status === "success") fetchTodos();
//     };
//
//     return (
//         <div className="tasks">
//             {data?.map((i) => (
//                 <div key={i._id} className="tasks__card">
//                     <Link href="/edittodo"><CiEdit/></Link>
//                     <span className={i.status}></span>
//                     <RiMastodonLine/>
//                     <h4>{i.title}</h4>
//                     <p className="text-red">{i.description}</p>
//                     <div>
//                         {back ? (
//                             <button
//                                 className="button-back"
//                                 onClick={() => changeStatus(i._id, back)}
//                             >
//                                 <BiLeftArrow/>
//                                 Back
//                             </button>
//                         ) : null}
//                         {next ? (
//                             <button
//                                 className="button-next"
//                                 onClick={() => changeStatus(i._id, next)}
//                             >
//                                 Next
//                                 <BiRightArrow/>
//                             </button>
//                         ) : null}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default Tasks;

import {RiMastodonLine} from "react-icons/ri";
import {BiRightArrow, BiLeftArrow} from "react-icons/bi";
import {CiEdit} from "react-icons/ci";
import Link from "next/link";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";

function Tasks({data, next, back, fetchTodos}) {


    const changeStatus = async (_id, status,) => {
        const res = await fetch("/api/todos", {
            method: "PATCH",
            body: JSON.stringify({_id, status, title: true, description: true}),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        console.log("dataNext", data)
        if (data.status === "success") fetchTodos();
        else console.log("task component has error")
    };



    const getStatusColor = (status) => {
        switch (status) {
            case "done":
                return "green";
            case "review":
                return "blue";
            case "in progress":
                return "#1be2b1";
            case "todo":
                return "orange";
            default:
                return "#1be2b1";
        }
    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 3, padding: 2,}}>
            {data?.map((i) => (
                <Card
                    key={i._id}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: 3
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        {/* Edit Icon */}
                        <Link href="/edittodo">
                            <IconButton color="primary">
                                <CiEdit/>
                            </IconButton>
                        </Link>
                        {/* Task Status */}
                        <Typography
                            variant="body2"
                            sx={{
                                backgroundColor: getStatusColor(i.status),
                                color: "white",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                textTransform: "capitalize",
                            }}
                        >
                            {i.status}
                        </Typography>
                    </CardContent>

                    {/* Mastodon Icon and Title */}
                    <CardContent sx={{display: "flex", alignItems: "center", gap: 1}}>
                        <RiMastodonLine size={24}/>
                        <Typography variant="h6" sx={{fontWeight: "bold", flexGrow: 1}}>
                            {i.title}
                        </Typography>
                    </CardContent>

                    {/* Description */}
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {i.description}
                        </Typography>
                    </CardContent>

                    {/* Action Buttons */}
                    <Divider/>
                    <CardActions sx={{display: "flex", justifyContent: "space-between", padding: "10px"}}>
                        {back ? (
                            <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<BiLeftArrow/>}
                                onClick={() => changeStatus(i._id, back)}
                            >
                                <BiLeftArrow/>
                                Back
                            </Button>
                        ) : null}
                        {next ? (
                            <Button
                                variant="outlined"
                                color="primary"
                                endIcon={<BiRightArrow/>}
                                onClick={() => changeStatus(i._id, next)}
                            >
                                Next
                                <BiRightArrow/>
                            </Button>
                        ) : null}
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};

export default Tasks;