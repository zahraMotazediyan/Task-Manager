// function ProfileForm({name, lastName, password, setName, setLastName, setPassword, submitHandler}) {
//     return (
//         <>
//             <div className="profile-form__input">
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         id="name"
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">LastName:</label>
//                     <input
//                         id="lastName"
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         id="password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button onClick={submitHandler}>Submit</button>
//             </div>
//         </>
//     )
// }
//
// export default ProfileForm;

import {TextField, Button, Box, Typography} from "@mui/material";

function ProfileForm({
                         name,
                         lastName,
                         password,
                         setName,
                         setLastName,
                         setPassword,
                         submitHandler,
                     }) {
    const handleSubmit = () => {
        submitHandler();
    };

    return (
        <Box sx={{maxWidth: 400, margin: "auto", padding: 2}}>
            <Typography variant="h6" gutterBottom>
                Update Profile
            </Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{marginTop: 2}}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default ProfileForm;
