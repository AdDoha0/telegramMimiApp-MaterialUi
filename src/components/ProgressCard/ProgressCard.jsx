import React from 'react';
import { Container, Typography, Box } from '@mui/material';


export default function ProgressBar() {
    return (
        <Box sx={{ 
          backgroundColor: '#ffffff',     // белый фон
          padding: { xs: 2, sm: 3 },     // адаптивные отступы
          borderRadius: 3,               // скругленные углы
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',  // тень
          border: '1px solid #e0e0e0'    // тонкая граница
        }}>
        {/* Временная заглушка для прогресс-карточки */}

          <Typography variant="body1" color="text.secondary">
            Здесь будет прогресс-карточка с кнопками
          </Typography>
        </Box>
    )
}