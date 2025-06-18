import React from 'react';
import { Box, LinearProgress, Typography, Paper } from '@mui/material';

export default function ProgressBar() {
  // Пример: прогресс на 65%
  const progress = 65; 

  return (
    <Paper
      // elevation={10}
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 500, 
          marginBottom: 1,
          fontSize: { xs: '1.2rem', sm: '1.3rem' }
        }}
      >
        Progress
      </Typography>

      <Box sx={{ width: '100%' }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#D4834A' // Тот же оранжевый цвет
            }
          }}
        />
        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'right', 
            marginTop: 1,
            fontSize: { xs: '0.85rem', sm: '0.95rem' }
          }}
        >
          {progress}%
        </Typography>
      </Box>
    </Paper>
  );
}
