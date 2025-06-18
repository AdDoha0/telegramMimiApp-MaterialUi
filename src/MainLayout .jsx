import { Outlet } from "react-router-dom";
import { Box, Container } from '@mui/material';

import CustomBottomNavigation from "./components/NavBar"; 

export default function MainLayout() {
  return (
    <>
      <Box
        sx={{
          pb: 8, // отступ снизу, чтобы навигация не перекрывала контент
          minHeight: '100vh',
          backgroundColor: '#f8f9fa'
        }}
      >
        <Container 
          maxWidth="sm" 
          sx={{ padding: { xs: 1, sm: 2 } }}
        >
          <Outlet/>
        </Container>
      </Box>
      
      <CustomBottomNavigation />
    </>
  );
}