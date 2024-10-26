
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";  // Import Link for routing
import { Box } from "@mui/material";

export default function Footer() {
    return (
      <Box
        sx={{
          p: 1,
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%"
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