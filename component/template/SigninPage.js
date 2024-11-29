// import {useEffect, useState} from "react";
// import {signIn, useSession} from "next-auth/react";
// import Link from "next/link";
// import {useRouter} from "next/router";
//
// function SigninPage() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const router = useRouter();
//     const {status} = useSession();
//
//     const loginHandler = async () => {
//         const res = await signIn("credentials", {
//             email,
//             password,
//             redirect: false,
//         });
//
//         if (!res.error) await router.push("/");
//     };
//
//     useEffect(() => {
//         if (status === "authenticated") router.replace("/")
//     }, [status]);
//
//     return (
//         <div className="signin-form">
//             <h3>Sign in Form</h3>
//             <input
//                 placeholder="Enter Email"
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 placeholder="Enter Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={loginHandler}>Login</button>
//             <div>
//                 <p>Create an account?</p>
//                 <Link href="/signup">Sign up</Link>
//             </div>
//         </div>
//     )
// };
//
// export default SigninPage;


import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";

function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { status } = useSession();

    const loginHandler = async () => {
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (!res.error) await router.push("/");
    };

    useEffect(() => {
        if (status === "authenticated") router.replace("/");
    }, [status]);

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f4f5fa" }}>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "white",
                }}
            >
                <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
                    Sign in Form
                </Typography>

                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={loginHandler}
                    sx={{ mt: 2, mb: 2, backgroundColor: "#3f47f4" }}
                >
                    Login
                </Button>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Create an account?</Typography>
                    <Link href="/signup" passHref>
                        <Button variant="text" sx={{ color: "#3f47f4" }}>
                            Sign up
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Grid>
    );
}

export default SigninPage;
