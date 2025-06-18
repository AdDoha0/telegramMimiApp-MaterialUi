import React from 'react';
import { Box, Button, LinearProgress } from '@mui/material';

export default function ProgressBar() {

  const value = 65

  return (
    <Box 
      sx={{ 
        backgroundColor: '#fff',
        borderRadius: 3,  
        padding: 2,
        mb: 1,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        textAlign: 'center',
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
              backgroundColor: ' #f9eee3', // цвет фона прогресс-бара (например, светло-оранжевый)

              '& .MuiLinearProgress-bar': {
                backgroundColor: '#e18c4b', // цвет заливки 
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
            backgroundColor: '#e99555',
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
