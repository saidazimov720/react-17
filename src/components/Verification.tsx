import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

interface VerificationProps{
    data: Record<string, any>;
    edit: () => void;
}

const VerificationPage: React.FC<VerificationProps> = ({data, edit}) =>{
    return(
        <Box sx={{maxWidth: 700, margin: '0 auto' , padding: '2rem'}}>
            <Typography variant="h4" align="center" gutterBottom>Verify your information</Typography>

            <Grid container spacing={2}>
        {Object.entries(data).map(([key, value]) => (
          <Grid item xs={12} sm={6} key={key}>
            <Typography variant="body1">
              <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value || 'N/A'}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box sx={{textAlign: 'center', marginTop: '2rem'}}>
        <Button variant="contained" color="secondary" onClick={edit}>Edit information</Button>
        <Button variant="contained" color="primary" sx={{marginLeft: '1rem'}}>Confirm and Submit</Button>
      </Box>
        </Box>
    )
}

export default VerificationPage;