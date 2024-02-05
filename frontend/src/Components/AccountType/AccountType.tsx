import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SelectorCard from '../SelectorCard/SelectorCard.tsx';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const defaultTheme = createTheme();

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          Jobboard App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const AccountType = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click event for Professional card
  const handleProfessionalClick = () => {
    navigate('/signup/professional'); // Navigate to the professional sign-up page
  };

  // Function to handle click event for Employer card
  const handleEmployerClick = () => {
    navigate('/signup/employer'); // Navigate to the employer sign-up page
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <ButtonBase 
                sx={{ 
                  width: '100%', 
                  display: 'block',
                  cursor: 'pointer', // Make the cursor a pointer on hover
                  boxShadow: 3,
                  ':hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }} 
                onClick={handleProfessionalClick}
              >
                <SelectorCard title="Professional" text="Sign up as a job seeker to apply for jobs" imageLink="https://images.idgesg.net/images/article/2022/07/serene-worker-happy-employee-studio-romantic-shutterstock-100930716-large.jpg?auto=webp&quality=85,70" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase 
                sx={{ 
                  width: '100%', 
                  display: 'block',
                  cursor: 'pointer', // Make the cursor a pointer on hover
                  boxShadow: 3,
                  ':hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }} 
                onClick={handleEmployerClick}
              >
                <SelectorCard title="Employer" text="Sign up as an employer to post jobs" imageLink="data:image/jpeg;base64,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" />
              </ButtonBase>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default AccountType;
