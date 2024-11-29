// import {useEffect, useState} from "react";
// import {useRouter} from "next/router";
//
//
// function EditProfile() {
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const router = useRouter();
//
//     const fetchProfileData = async () => {
//         const res = await fetch("/api/profile");
//         const profileData = await res.json();
//         if (profileData.status === "success" && profileData.data) {
//             setName(profileData.data.name);
//             setLastName(profileData.data.lastName);
//             setEmail(profileData.data.email);
//         }
//     };
//

//     const editHandler = async () => {
//         const res = await fetch("/api/profile", {
//             method: "PATCH",
//             body: JSON.stringify({name, lastName, email}),
//             headers: {"Content-Type": "application/json"}
//         });
//         const data = await res.json();
//         if (data.status === "success") {
//             console.log("Updated profile", data);
//             router.push("/profile"); // Redirect to the profile page
//         }
//     };
//
//     useEffect(() => {
//         fetchProfileData();
//     }, []);
//
//     return (
//         <div className="profile-form__input">
//             <h2>Edit Profile</h2>
//             <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     id="name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <button onClick={editHandler}>Save</button>
//         </div>
//     );
// }
//
// export default EditProfile;

import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
} from "@mui/material";

function EditProfile() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const fetchProfileData = async () => {
        const res = await fetch("/api/profile");
        const profileData = await res.json();
        if (profileData.status === "success" && profileData.data) {
            setName(profileData.data.name);
            setLastName(profileData.data.lastName);
            setEmail(profileData.data.email);
        }
    };

    const editHandler = async () => {
        const res = await fetch("/api/profile", {
            method: "PATCH",
            body: JSON.stringify({name, lastName, email}),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if (data.status === "success") {
            console.log("Updated profile", data);
            router.push("/profile"); // Redirect to the profile page
        }
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: "500px",
                margin: "auto",
                padding: 4,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            component={Paper}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#3f51b5",
                    marginBottom: 4,
                }}
            >
                Edit Profile
            </Typography>

            <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>

                {/* Last Name Field */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
            </Grid>

            {/* Save Button */}
            <Box sx={{textAlign: "center", marginTop: 4}}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={editHandler}
                    sx={{
                        paddingX: 5,
                        "&:hover": {
                            backgroundColor: "#3f47f4",
                        },
                    }}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
}

export default EditProfile;
