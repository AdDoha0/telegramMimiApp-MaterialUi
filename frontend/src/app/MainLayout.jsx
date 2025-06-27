import { Outlet } from "react-router-dom";
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CustomBottomNavigation from "@/shared/ui/NavBar"; 




export default function MainLayout() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          pb: 8, 
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container 
          maxWidth="md" 
          sx={{ padding: { xs: 1, sm: 2, md: 3 } }}
        >
          <Outlet/>
        </Container>
      </Box>
      
      <CustomBottomNavigation />
    </>
  );
}


