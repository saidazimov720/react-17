import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

interface VerificationProps{
    data: Record<string, any>;
    onEdit: () => void;
}