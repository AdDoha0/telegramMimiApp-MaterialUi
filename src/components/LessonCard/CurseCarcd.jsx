import React from 'react';
import { Box, Typography, Button, Chip, Card, CardMedia, CardContent, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useTheme } from '@mui/material/styles';

export default function CourseCard({ 
  image, 
  title, 
  subtitle, 
  tag, 
  level, 
  lessonsCount 
}) {
    const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        maxWidth: { xs: 260, sm: 320, md: 360 },
        minWidth: { xs: 220, sm: 250, md: 300 },
        bgcolor: theme.palette.background.paper,
        border: "solid",
        borderColor: theme.palette.custom.border,
        borderWidth: "1px",
        width: '100%',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: { xs: 120, sm: 140, md: 160 }, objectFit: 'cover' }}
          image={image}
          alt={title}
        />
        {/* Уровень (A2 и т.п.) */}
        <Chip 
          label={level} 
          sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 8, 
            bgcolor: '#2F855A', 
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '0.7rem', sm: '0.8rem' }
          }} 
          size="small"
        />
      </Box>

      <CardContent>
        <Stack direction="row" alignItems="center" spacing={0.5} mb={0.5}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <MenuBookIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#555' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.85rem', sm: '1rem' } }}>
              {lessonsCount} урок{lessonsCount === 1 ? '' : lessonsCount < 5 ? 'а' : 'ов'}
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
          {title}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
