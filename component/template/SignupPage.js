// import {useState} from "react";
// import Link from "next/link";
// import {useRouter} from "next/router";
//
// function SignupPage() {
//
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const router = useRouter();
//
//     const signupHandler = async () => {
//         const res = await fetch("/api/auth/signup", {
//             method: "POST",
//             body: JSON.stringify({email, password}),
//             headers: {"Content-Type": "application/json"},
//         });
//         const data = await res.json();
//         console.log(data)
//         if (data.status === "success") router.push("/signin")
//     };
//
//     return (
//         <div className="signin-form">
//             <h3>Registration Form</h3>
//             <input
//                 type="text"
//                 value={email}
//                 placeholder="Enter Email"
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 type="password"
//                 value={password}
//                 placeholder="Enter Password"
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={signupHandler}>Register</button>
//             <div>
//                 <p>Have an account?</p>
//                 <Link href="/signin">Sign in</Link>
//             </div>
//         </div>
//     )
// }
//
// export default SignupPage;

import { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Box, Typography, Link } from "@mui/material";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const signupHandler = async () => {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") router.push("/signin");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: 2,
                bgcolor: "#f9f9f9",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    padding: 3,
                    bgcolor: "#fff",
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h4" gutterBottom textAlign="center">
                    Registration Form
                </Typography>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={signupHandler}
                    sx={{ marginBottom: 2 }}
                >
                    Register
                </Button>
                <Typography variant="body2" textAlign="center">
                    Already have an account?{" "}
                    <Link
                        href="/signin"
                        underline="hover"
                        sx={{ fontWeight: "bold", cursor: "pointer" }}
                    >
                        Sign in
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default SignupPage;
