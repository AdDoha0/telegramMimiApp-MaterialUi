import React from 'react';
import { Box, Button, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ProgressBar() {
  const theme = useTheme();
  

  const value = 65

  return (
    <Box 
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,  
        padding: 2,
        mb: 1,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        textAlign: 'center',
        border: "solid",
        borderColor: theme.palette.custom.border,
        borderWidth: "1px"
      }}
    >
      {/* Прогресс-бар */}
      <Box sx={{ mb: 2 }}>
        <LinearProgress 
            variant="determinate"           
            value={value} 
            sx={{ 
              height: 10, 
              borderRadius: 5,
              // backgroundColor: ' #f9eee3', // цвет фона прогресс-бара (например, светло-оранжевый)

              '& .MuiLinearProgress-bar': {
                backgroundColor: theme.palette.primary.main, // цвет заливки 
                borderRadius: 5,
              }
            }}
          />
      </Box>
      
     {/* Кнопка снизу слева */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button 
          variant="contained" 
          sx={{ 
            // backgroundColor: theme.palette.,
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
