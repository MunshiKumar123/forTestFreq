import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Routing from '../_route/Routing'
import _nav from '../_nav/_nav'
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';

const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    // Adjust the Toolbar styling here
    '& .MuiToolbar-root': {
        backgroundColor: '#0F5F9E',
    },
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        overflowX: 'auto', // Enable horizontal scrolling
        scrollbarWidth: 'thin', // Customize the scrollbar width (use 'auto' or 'thin' as per your preference)
        scrollbarColor: '#4CAF50 #fff', // Customize the scrollbar color
        WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on iOS devices
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': {
                ...openedMixin(theme),
                backgroundColor: '#0F5F9E',
                '&::-webkit-scrollbar': {
                    width: '7px', // Adjust the width as needed
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#65818e',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#fff',
                },
            },
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': {
                ...closedMixin(theme),
                backgroundColor: '#0F5F9E',
                '&::-webkit-scrollbar': {
                    width: '7px', // Adjust the width as needed
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#65818e',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#fff',
                },
            },
        }),
    }),
);



export default function MenuNavigation() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [mainSelectedItem, setMainSelectedItem] = useState(null);
    const [sublistSelectedItem, setSublistSelectedItem] = useState(null);

    const handleMainItemClick = (index) => {
        if (mainSelectedItem === index) {
            setMainSelectedItem(null);
        } else {
            setMainSelectedItem(index);
            setSublistSelectedItem(null);
        }
    };

    const handleSublistItemClick = (index) => {
        setSublistSelectedItem(index);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ fontSize: 18 }}>
                        Create Project
                    </Typography>
                    <div style={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', backgroundColor: 'transparent' }}>
                        <h5><b>Test</b></h5>
                    </Typography>
                    <IconButton onClick={handleDrawerClose} style={{ backgroundColor: '#0F5F9E' }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: '#fff' }} /> : <ChevronLeftIcon sx={{ color: '#fff' }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {_nav?.map((mainItem, mainIndex) => (
                        <React.Fragment key={mainIndex}>
                            <ListItem
                                disablePadding
                                sx={{
                                    display: 'block',
                                    backgroundColor: mainSelectedItem === mainIndex ? 'white' : 'transparent',
                                    paddingTop: 0,
                                    paddingBottom: 0.3,
                                }}
                                onClick={() => handleMainItemClick(mainIndex)}

                            >
                                <ListItemButton
                                    component={Link}
                                    to={mainItem.to}
                                    sx={{
                                        minHeight: 28,
                                        justifyContent: 'initial',
                                        px: 2.5,
                                        paddingTop: 0,
                                        paddingBottom: 0,

                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 3,
                                            justifyContent: 'center',
                                            '& svg': {
                                                fontSize: 20,
                                            },
                                            color: '#c4cec6'
                                        }}
                                    >
                                        {mainItem.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={mainItem.name}
                                        sx={{
                                            color: '#A2CAEF',
                                            opacity: 1,
                                        }} />
                                    {mainItem.sublist && (
                                        mainSelectedItem === mainIndex ? (
                                            open ? <ExpandMoreIcon sx={{ color: 'white' }} /> : <KeyboardArrowRight sx={{ color: 'white' }} />
                                        ) : <KeyboardArrowRight sx={{ color: 'white' }} />
                                    )}
                                </ListItemButton>
                            </ListItem>
                            {mainSelectedItem === mainIndex && mainItem.sublist && (
                                <List sx={{ paddingLeft: 2 }}>
                                    {mainItem?.sublist.map((subText, subIndex) => (
                                        <ListItem
                                            key={subIndex}
                                            disablePadding
                                            sx={{
                                                display: 'block',
                                                backgroundColor: sublistSelectedItem === subIndex + 1 ? 'white' : 'transparent',
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                            }}
                                            onClick={() => handleSublistItemClick(subIndex + 1)}
                                        >
                                            <ListItemButton
                                                component={Link}
                                                to={subText.to}
                                                sx={{
                                                    minHeight: 28,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2.5,
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                        '& svg': {
                                                            fontSize: 17,
                                                        },
                                                        color: ' #c4cec6'
                                                    }}
                                                >
                                                    {subText.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={subText.name}
                                                    sx={{
                                                        color: '#A2CAEF',
                                                        opacity: open ? 1 : 0,
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <DrawerHeader />
                <Routing />
            </Box>
        </Box>
    );
}
