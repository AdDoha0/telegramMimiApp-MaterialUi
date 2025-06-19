import { Outlet } from "react-router-dom";
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CustomBottomNavigation from "./components/NavBar"; 




export default function MainLayout() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          pb: 8, // отступ снизу, чтобы навигация не перекрывала контент
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default
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




// #2F855A = окцентный цвет 