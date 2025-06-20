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
        maxWidth: 360,
        bgcolor: theme.palette.background.paper,
        border: "solid",
        borderColor: theme.palette.custom.border,
        borderWidth: "1px"
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="160"
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
            fontWeight: 600
          }} 
          size="small"
        />
      </Box>

      <CardContent>
        <Stack direction="row" alignItems="center" spacing={0.5} mb={0.5}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <MenuBookIcon sx={{ fontSize: 18, color: '#555' }} />
            <Typography variant="body2" color="text.secondary">
              {lessonsCount} урок{lessonsCount === 1 ? '' : lessonsCount < 5 ? 'а' : 'ов'}
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        
      </CardContent>
    </Card>
  );
}
