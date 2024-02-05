import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/signin');
    }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jobboard App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Jobboard App
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Find your dream job or your next great hire.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                For Job Seekers
              </Typography>
              <Typography variant="body1">
                Discover opportunities and connect with employers.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                For Employers
              </Typography>
              <Typography variant="body1">
                Post jobs and find talented candidates.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}

export default Home;
