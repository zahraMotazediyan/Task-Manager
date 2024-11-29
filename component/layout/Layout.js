// import Link from "next/link";
// import {VscListSelection} from "react-icons/vsc";
// import {BiMessageSquareAdd} from "react-icons/bi";
// import {RxDashboard} from "react-icons/rx";
// import {signOut, useSession} from "next-auth/react";
// import {FiLogOut} from "react-icons/fi";
//
//
// function Layout({children}) {
//     const {status} = useSession();
//
//     const logOutHandler = () => {
//         signOut();
//     };
//
//     return (
//         <div className="container">
//             <header>
//                 <p>Todo App</p>
//                 {status === "authenticated" ? (
//                     <button onClick={logOutHandler}>
//                         LogOut
//                         <FiLogOut/>
//                     </button>
//                 ) : null}
//             </header>
//             <div className="container--main">
//                 <aside>
//                     <p>Welcome 👋</p>
//                     <ul>
//                         <li>
//                             <VscListSelection/>
//                             <Link href="/">Todos</Link>
//                         </li>
//                         <li>
//                             <BiMessageSquareAdd/>
//                             <Link href="/add-todo">Add Todo</Link>
//                         </li>
//                         <li>
//                             <RxDashboard/>
//                             <Link href="/profile">Profile</Link>
//                         </li>
//                     </ul>
//                 </aside>
//                 <section>{children}</section>
//             </div>
//         </div>
//     )
// }
//
// export default Layout;

// import {useState} from "react";
// import {Box, Button, Typography, Drawer, IconButton, useMediaQuery, useTheme} from "@mui/material";
// import {VscListSelection} from "react-icons/vsc";
// import {BiMessageSquareAdd} from "react-icons/bi";
// import {RxDashboard} from "react-icons/rx";
// import {signOut, useSession} from "next-auth/react";
// import {FiLogOut} from "react-icons/fi";
// import Link from "next/link";
// import MenuIcon from '@mui/icons-material/Menu';
//
// function Layout({children}) {
//     const {status} = useSession();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//     const [drawerOpen, setDrawerOpen] = useState(false);
//
//     const logOutHandler = () => {
//         signOut();
//     };
//
//     const toggleDrawer = () => {
//         setDrawerOpen(!drawerOpen);
//     };
//
//     return (
//         <Box
//             sx={{
//                 width: {
//                     xs: '100%',
//                     sm: '100%',
//                     md: '100%',
//                 },
//                 height: 'auto',
//             }}
//         >
//             {/* Header */}
//             <Box
//                 sx={{
//                     backgroundColor: "#3f47f4",
//                     height: "150px",
//                     color: "#fff",
//                     fontSize: "1.5rem",
//                     fontWeight: "bold",
//                     padding: "20px 10px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     flexDirection: isMobile ? "column" : "row",
//                 }}
//             >
//                 <Typography variant="h5" sx={{
//                     fontSize: {
//                         xs: '10px',
//                         sm: '20px',
//                         md: '25px',
//                     },
//                     height: 'auto',
//                 }}>
//                     Todo App
//                 </Typography>
//                 {status === "authenticated" ? (
//                     <Button
//                         sx={{
//                             fontSize: {
//                                 xs: '10px',
//                                 sm: '20px',
//                                 md: '20px',
//                             },
//                             backgroundColor: "#3f47f4",
//                             border: "1px solid #fff",
//                             color: "#fff",
//                             padding: {
//                                 xs: "3px 8px",
//                                 sm: "5px 10px",
//                                 md: "8px 8px",
//                             },
//                             textTransform: "capitalize",
//                             transition: "all 0.3s ease",
//                             "&:hover": {
//                                 backgroundColor: "#2c38d1",
//                                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Slight shadow on hover
//                             },
//                         }}
//                         onClick={logOutHandler}
//                         endIcon={<FiLogOut/>}
//                     >
//                         Log Out
//                     </Button>
//
//                 ) : null}
//
//                 {/* Hamburger Icon for Mobile */}
//                 {isMobile && (
//                     <IconButton sx={{color: "#fff"}} onClick={toggleDrawer}>
//                         <MenuIcon/>
//                     </IconButton>
//                 )}
//             </Box>
//
//             {/* Sidebar (Drawer) */}
//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={toggleDrawer}
//                 sx={{
//                     "& .MuiDrawer-paper": {
//                         width: "250px",
//                         backgroundColor: "#f4f4f4",
//                         minHeight: "calc(100vh - 150px)",
//                     },
//                 }}
//             >
//                 <Box sx={{padding: 2}}>
//                     <Typography variant="h6" sx={{marginBottom: 2}}>
//                         Welcome 👋
//                     </Typography>
//                     <ul>
//                         <li>
//                             <VscListSelection/>
//                             <Link href="/">Todos</Link>
//                         </li>
//                         <li>
//                             <BiMessageSquareAdd/>
//                             <Link href="/add-todo">Add Todo</Link>
//                         </li>
//                         <li>
//                             <RxDashboard/>
//                             <Link href="/profile">Profile</Link>
//                         </li>
//                     </ul>
//                 </Box>
//             </Drawer>
//
//             {/* Main Content */}
//             <Box sx={{display: "flex"}}>
//                 {!isMobile && (
//                     <Box
//                         sx={{
//                             width: "250px",
//                             backgroundColor: "#f4f4f4",
//                             padding: 2,
//                             minHeight: "calc(100vh - 150px)", // Ensure sidebar takes full height
//                         }}
//                     >
//                         <Typography variant="h6" sx={{marginBottom: 2}}>
//                             Welcome 👋
//                         </Typography>
//                         <ul>
//                             <li>
//                                 <VscListSelection/>
//                                 <Link href="/">Todos</Link>
//                             </li>
//                             <li>
//                                 <BiMessageSquareAdd/>
//                                 <Link href="/add-todo">Add Todo</Link>
//                             </li>
//                             <li>
//                                 <RxDashboard/>
//                                 <Link href="/profile">Profile</Link>
//                             </li>
//                         </ul>
//                     </Box>
//                 )}
//                 <Box
//                     sx={{
//                         flex: 1,
//                         padding: 3,
//                         minHeight: "calc(100vh - 150px)", // Make sure content area takes full height
//                     }}
//                 >
//                     {children}
//                 </Box>
//             </Box>
//         </Box>
//     );
// }
//
// export default Layout;


import {useState} from "react";
import {
    Box,
    Button,
    Typography,
    Drawer,
    IconButton,
    useMediaQuery,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {VscListSelection} from "react-icons/vsc";
import {BiMessageSquareAdd} from "react-icons/bi";
import {RxDashboard} from "react-icons/rx";
import {signOut, useSession} from "next-auth/react";
import {FiLogOut} from "react-icons/fi";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

function Layout({children}) {
    const {status} = useSession();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const logOutHandler = () => {
        signOut();
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                },
                height: 'auto',
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    backgroundColor: "#3f47f4",
                    height: "150px",
                    color: "#fff",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                {/* Hamburger Icon */}
                {isMobile && (
                    <IconButton
                        sx={{color: "#fff", marginBottom: 2}}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon/>
                    </IconButton>
                )}
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: {
                            xs: "18px",
                            sm: "24px",
                            md: "28px",
                        },
                        fontWeight: "bold",
                    }}
                >
                    Todo App
                </Typography>
            </Box>

            {/* Sidebar (Drawer) */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "250px",
                        backgroundColor: "#f4f4f4",
                        minHeight: "calc(100vh - 150px)",
                    },
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{marginBottom: 3, textAlign: "center"}}
                        >
                            Welcome 👋
                        </Typography>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <VscListSelection/>
                                </ListItemIcon>
                                <Link href="/">
                                    <ListItemText primary="Todos"/>
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BiMessageSquareAdd/>
                                </ListItemIcon>
                                <Link href="/add-todo">
                                    <ListItemText primary="Add Todo"/>
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <RxDashboard/>
                                </ListItemIcon>
                                <Link href="/profile">
                                    <ListItemText primary="Profile"/>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={logOutHandler}
                        sx={{
                            alignSelf: "center",
                            textTransform: "capitalize",
                            padding: "10px 20px",
                        }}
                        endIcon={<FiLogOut/>}
                    >
                        Log Out
                    </Button>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box sx={{display: "flex", minHeight: "calc(100vh - 150px)"}}>
                {/* Sidebar for larger screens */}
                {!isMobile && (
                    <Box
                        sx={{
                            width: "250px",
                            backgroundColor: "#f4f4f4",
                            padding: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{marginBottom: 3, textAlign: "center"}}
                            >
                                Welcome 👋
                            </Typography>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <VscListSelection/>
                                    </ListItemIcon>
                                    <Link href="/">
                                        <ListItemText primary="Todos"/>
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <BiMessageSquareAdd/>
                                    </ListItemIcon>
                                    <Link href="/add-todo">
                                        <ListItemText primary="Add Todo"/>
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <RxDashboard/>
                                    </ListItemIcon>
                                    <Link href="/profile">
                                        <ListItemText primary="Profile"/>
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={logOutHandler}
                            sx={{
                                alignSelf: "left",
                                textTransform: "capitalize",
                                padding: "10px 20px",
                                // marginRight:"20px",
                            }}
                            endIcon={<FiLogOut/>}
                        >
                            Log Out
                        </Button>
                    </Box>
                )}
                <Box
                    sx={{
                        flex: 1,
                        padding: 3,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;
