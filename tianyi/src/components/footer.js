import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                p: 1,
                position: "relative", // Change to relative
                // Use marginTop to create space above the footer if needed
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                    {"© "}
                    {new Date().getFullYear()}
                    {" Tianyi."}
                </Typography>
            </Container>
        </Box>
    );
}
