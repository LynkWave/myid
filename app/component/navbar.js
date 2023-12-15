
'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Dock, Newspaper } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'Web  3.0', 'Technology', 'Career'];
const hrefs = [
    '/', '/web3', '/tech', '/career'
];


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <img width={"40"} height={"60"} style={{ borderRadius: '500px', opacity: '0.6' }} src="logo.png" alt="content" />

                <Typography variant="h6" sx={{ my: 2 }}>
                    MYID
                </Typography>
            </Box>


            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <a href={hrefs[index]} style={{ textDecoration: 'none' }} >
                                <ListItemText primary={item} />
                            </a>
                        </ListItemButton>

                    </ListItem>
                ))}

            </List>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'transparent' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h7s"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img width={"30"} height={"40"} style={{ borderRadius: '500px', opacity: '0.6' }} src="logo.png" alt="content" />

                        MYID
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button variant='text' key={item} href={hrefs[index]} sx={{ color: '#CEECF5', textTransform: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {item}
                            </Button>
                        ))}

                    </Box>
                    <Box>
                        <Button variant='text' href="https://myid-1.gitbook.io/web3/" target='/blank' sx={{ display: { xs: 'none', sm: 'flex' }, color: 'white', textTransform: 'none', ml: '6rem' }}>
                            <h3>
                                <Dock />
                                Docs
                            </h3>
                        </Button>
                        <Button variant='text' href="https://medium.com/@My-ID" target='_blank' sx={{ display: { xs: 'none', sm: 'flex' }, color: 'white', textTransform: 'none', ml: '6rem' }}>
                            <h3>
                                <Newspaper />
                                News
                            </h3>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

// DrawerAppBar.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default DrawerAppBar;