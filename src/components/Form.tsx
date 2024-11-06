import React from "react";
import { useForm, Control, Controller } from "react-hook-form";
import { render } from '@testing-library/react';
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
import { error } from "console";

// const {control} =useForm();

interface AdmissionProps {
    onSubmit: (data: Record<string, any>) => void;
}

const AdmissionForm: React.FC<AdmissionProps> = ({ onSubmit }) => {
    const { handleSubmit, register, formState:{errors}, control } = useForm();

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
                            <Select  label="Please select the month"   {...register('birthMonth')}>
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
                            <Select label="Please select a day" {...register('birthDay')}>
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
                        <Select label="Please select a year" {...register('birthYear')}>
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
                        <FormLabel component="legend">of which country are you citizen?</FormLabel>
                        <Select {...register('citizenship')}>
                            <MenuItem value="">Japan</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Russia">Russia</MenuItem>
                            <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                </Grid>
                
               <Grid container spacing={2}  alignContent={"center"} mt={3}>
               <Grid item xs={12} sm={6.5}>
                    <TextField sx={{width: '300px'}} label="Phone" {...register('phone')}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField sx={{width: '300px'}} label="Email" {...register('email')}/>
                    <Typography variant="subtitle1">example@exmaple.com</Typography>
                </Grid>
                </Grid>

                <Grid container spacing={2} mt={3}>
                    <Grid item xs={12}>
                    <Typography variant="h5">Mailing Address</Typography>
                    <TextField sx={{width: '700px'}} label="street" {...register('street')}/>
                    <Typography variant="subtitle1" color="success">Street Adress</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField sx={{width: '700px'}} label="street" {...register('street')}/>
                    <Typography variant="subtitle1">Street Adress Line 2</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} mt={3}>
                    <Grid item xs={12}>
                        <TextField sx={{width: '250px'}} label="city" {...register('city')} />
                        <Typography variant="subtitle1">City</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <TextField  sx={{width: '250px'}} label="state/province" {...register('state/province')} />
                        <Typography variant="subtitle1">State/Province</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Controller 
                    name="lastName"
                    control={control}
                    render={({field}) =>(
                        <FormControl>
                            <FormLabel>Last/Family name</FormLabel>
                            <TextField variant="outlined" {...field} error={!!errors["lastName"]} />
                        </FormControl>
                    )} 
                    />
                </Grid>


                <Grid item xs={12} mt={2}> 
                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>
                </Grid>
            </form>
        </Box>
    )
}

export default AdmissionForm;