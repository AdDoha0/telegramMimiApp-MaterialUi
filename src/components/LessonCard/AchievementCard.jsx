import React from 'react';
import { Box, Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // пример иконки

export default function AchievementCard({ title, icon, color }) {
  return (
    <Box
      sx={{
        minWidth: 100,
        maxWidth: 120,
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 1,
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ fontSize: 40, color: color }}>
        {icon}
      </Box>
      <Typography 
        variant="body2" 
        sx={{ fontWeight: 'bold', fontSize: '0.8rem', mt: 1 }}
      >
        {title}
      </Typography>
    </Box>
  );
}
