// import {useEffect, useState} from "react";
// import {CgProfile} from "react-icons/cg";
// import ProfileForm from "../module/ProfileForm";
// import ProfileData from "../module/ProfileData";
// import {CiEdit} from "react-icons/ci";
// import Link from "next/link";
//
// function ProfilePage() {
//
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState('');
//     const [password, setPassword] = useState('');
//     const [data, setData] = useState('');
//
//     const submitHandler = async () => {
//         const res = await fetch("/api/profile", {
//             method: "POST",
//             body: JSON.stringify({name, lastName, password}),
//             headers: {"Content-Type": "application/json"}
//         });
//         const data = await res.json();
//         console.log("profile", data)
//     };
//
//     useEffect(() => {
//         fetchProfile();
//     }, [])
//
//     const fetchProfile = async () => {
//         const res = await fetch("/api/profile");
//         const data = await res.json();
//         if (data.status === "success" && data.data.name && data.data.lastName && data.data.email) {
//             setData(data.data)
//         }
//     };
//
//     return (
//         <div className="profile-form">
//             <Link href="/editprofile"><CiEdit/></Link>
//             <h2>
//                 <CgProfile/>
//                 Profile
//             </h2>
//             {data ? (
//                     <ProfileData data={data}/>
//                 ) :
//                 (
//                     <ProfileForm
//                         name={name}
//                         lastName={lastName}
//                         setName={setName}
//                         setLastName={setLastName}
//                         password={password}
//                         setPassword={setPassword}
//                         submitHandler={submitHandler}
//                     />
//                 )}
//         </div>
//     )
// }
//
// export default ProfilePage;

// import { useEffect, useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import ProfileForm from "../module/ProfileForm";
// import ProfileData from "../module/ProfileData";
// import { CiEdit } from "react-icons/ci";
// import Link from "next/link";
//
// function ProfilePage() {
//     const [name, setName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [password, setPassword] = useState("");
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//
//     const submitHandler = async () => {
//         try {
//             const res = await fetch("/api/profile", {
//                 method: "POST",
//                 body: JSON.stringify({ name, lastName, password }),
//                 headers: { "Content-Type": "application/json" },
//             });
//             const result = await res.json();
//
//             if (result.status === "success") {
//                 fetchProfile(); // Refresh profile data
//             }
//         } catch (error) {
//             console.error("Error submitting profile:", error);
//         }
//     };
//
//     const fetchProfile = async () => {
//         try {
//             setLoading(true);
//             const res = await fetch("/api/profile");
//             const result = await res.json();
//
//             if (result.status === "success" && result.data) {
//                 setData(result.data);
//                 setName(result.data.name || ""); // Prefill form fields
//                 setLastName(result.data.lastName || "");
//             }
//         } catch (error) {
//             console.error("Error fetching profile:", error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         fetchProfile();
//     }, []);
//
//     return (
//         <div className="profile-form">
//             <Link href="/editprofile">
//                 <CiEdit />
//             </Link>
//             <h2>
//                 <CgProfile />
//                 Profile
//             </h2>
//
//             {loading ? (
//                 <p>Loading...</p>
//             ) : data ? (
//                 <ProfileData data={data} />
//             ) : (
//                 <ProfileForm
//                     name={name}
//                     lastName={lastName}
//                     setName={setName}
//                     setLastName={setLastName}
//                     password={password}
//                     setPassword={setPassword}
//                     submitHandler={submitHandler}
//                 />
//             )}
//         </div>
//     );
// }
//
// export default ProfilePage;

import {useEffect, useState} from "react";
import {Box, Typography, IconButton, CircularProgress} from "@mui/material";
import {CgProfile} from "react-icons/cg";
import {CiEdit} from "react-icons/ci";
import Link from "next/link";
import ProfileForm from "../module/ProfileForm";
import ProfileData from "../module/ProfileData";

function ProfilePage() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const submitHandler = async () => {
        try {
            const res = await fetch("/api/profile", {
                method: "POST",
                body: JSON.stringify({name, lastName, password}),
                headers: {"Content-Type": "application/json"},
            });
            const result = await res.json();

            if (result.status === "success") {
                fetchProfile(); // Refresh profile data
            }
        } catch (error) {
            console.error("Error submitting profile:", error);
        }
    };

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/profile");
            const result = await res.json();

            if (result.status === "success" && result.data) {
                setData(result.data);
                setName(result.data.name || ""); // Prefill form fields
                setLastName(result.data.lastName || "");
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#fff",
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                        color: "#3f51b5",
                    }}
                >
                    <CgProfile size={32} style={{marginRight: "10px"}}/>
                    Profile
                </Typography>
                <IconButton
                    component={Link}
                    href="/editprofile"
                    sx={{
                        color: "#3f51b5",
                        "&:hover": {backgroundColor: "#f0f0f0"},
                    }}
                >
                    <CiEdit size={24}/>
                </IconButton>
            </Box>

            {/* Content Section */}
            {loading ? (
                <CircularProgress sx={{color: "#3f51b5"}}/>
            ) : data ? (
                <ProfileData data={data}/>
            ) : (
                <ProfileForm
                    name={name}
                    lastName={lastName}
                    setName={setName}
                    setLastName={setLastName}
                    password={password}
                    setPassword={setPassword}
                    submitHandler={submitHandler}
                />
            )}
        </Box>
    );
}

export default ProfilePage;
