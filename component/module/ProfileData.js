// // function ProfileData({data}) {
// //     return (
// //         <div className="profile-data">
// //             <div>
// //                 <span>Name:</span>
// //                 <p>{data.name}</p>
// //             </div>
// //             <div>
// //                 <span>LastName:</span>
// //                 <p>{data.lastName}</p>
// //             </div>
// //             <div>
// //                 <span>Email:</span>
// //                 <p>{data.email}</p>
// //             </div>
// //         </div>
// //     )
// // }
// //
// // export default ProfileData;
//
import { Box, Typography, Paper } from '@mui/material';

function ProfileData({ data }) {
    if (!data) return <Typography>Loading profile...</Typography>;

    return (
        <Box sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Profile Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box>
                        <Typography variant="body1" fontWeight="bold">
                            Name:
                        </Typography>
                        <Typography variant="body2">{data.name || "N/A"}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight="bold">
                            Last Name:
                        </Typography>
                        <Typography variant="body2">{data.lastName || "N/A"}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight="bold">
                            Email:
                        </Typography>
                        <Typography variant="body2">{data.email || "N/A"}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProfileData;
