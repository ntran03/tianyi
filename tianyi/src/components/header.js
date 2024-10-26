// Filename - Header.js

import React from "react";  // Import React

// Importing Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import logo from '../logo.png';

// Header component
function Header() {
    const getMenuButtons = () => {
        return (
            <>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Dancers</Button>
                <Button color="inherit">Costume Sale</Button>
                <Button color="inherit">Contact</Button>
            </>
        );
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#6760E6" }}>
            <Toolbar>
                {/* Logo */}
                <img
                    src={logo}
                    alt="Tianyi Dance Team Logo"
                    style={{ height: '40px', marginRight: '16px' }} // Adjust size as needed
                />
                {/* Menu Icon Button */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                {/* Title */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontFamily: "Work Sans, sans-serif", fontWeight: 600, color: "#FFFEFE", textAlign: "middle" }}
                >
                    Tianyi Dance Team
                </Typography>
                {/* Menu Buttons */}
                {getMenuButtons()}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
