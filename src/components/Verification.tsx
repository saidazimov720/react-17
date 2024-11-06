import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

interface VerificationProps{
    data: Record<string, any>;
    onEdit: () => void;
}

const VerificationPage: React.FC<VerificationProps> = ({data, edit}) =>{
    return(
        <Box sx={{maxWidth: 700, margin: '0 auto' , padding: '2rem'}}>
            <Typography variant="h4" ></Typography>
        </Box>
    )
}