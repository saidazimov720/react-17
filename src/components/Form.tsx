import React from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Grid,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    Typography,
    FormLabel,
} from "@mui/material";

interface AdmissionProps {
    onSubmit: (data: Record<string, any>) => void;
}

const AdmissionForm: React.FC<AdmissionProps> = ({ onSubmit }) => {
    const { handleSubmit, register } = useForm();

    return (
        <Box sx={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
            <Typography variant="h2" align="center" gutterBottom>College Admission Form</Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>Enter your admission information below</Typography>


            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField label="First name" fullWidth{...register('firstName')} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="Middle Initial" fullWidth{...register('middleInitial')} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="Last name" fullWidth{...register('lastName')} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Please select the month</InputLabel>
                            <Select     {...register('birthMonth')}>
                                <MenuItem value="">Please select the month</MenuItem>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <MenuItem key={i} value={i + 1}>
                                        {new Date(0, i).toLocaleString('en', { month: 'long' })}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Please select a day</InputLabel>
                            <Select {...register('birthDay')}>
                                <MenuItem value="">Please select a day</MenuItem>
                                {Array.from({length: 31}, (_, i) =>(
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>Please select a year</InputLabel>
                        <Select {...register('birthYear')}>
                            <MenuItem value="">Please select a year</MenuItem>
                            {Array.from({length: 100}, (_, i) =>(
                                <MenuItem key={i} value={2023 - i}>
                                    {2023 - i}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>

                
                <Grid container spacing={3} mt={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row{...register('gender')}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>of which country are you citizen?</InputLabel>
                        <Select {...register('citizenship')}>
                            <MenuItem value="">Please select</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Russia">Russia</MenuItem>
                            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                </Grid>
                

               
               <Grid container spacing={2}  alignContent={"center"} mt={3}>
               <Grid item xs={12} sm={4}>
                    <TextField label="Phone" {...register('phone')}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Email" {...register('email')}/>
                </Grid>
                </Grid>
                
                

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>
                </Grid>
            </form>
        </Box>
    )
}

export default AdmissionForm;