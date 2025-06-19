
import React from 'react';
import { Typography, Box } from '@mui/material';

import { useTheme } from '@mui/material/styles';

export default function Header() {
    const theme = useTheme();
    return (
    <header>
      {/* Заголовок страницы */}
      <Box sx={{ 
        textAlign: 'center',           // текст по центру
        marginBottom: { xs: 3, sm: 4 }, // отступ снизу (мобильные меньше)
        paddingTop: 6                 // отступ сверху
      }}>
        <Typography 
          variant="h3"           // размер заголовка (большой)
          component="h1"         // HTML тег h1 для SEO
          sx={{ 
            fontWeight: 'bold',          // жирный шрифт
            color: theme.palette.text.primary,               // темно-серый цвет
            fontSize: { xs: '1.8rem', sm: '2.5rem' }  // адаптивный размер
          }}
        >
          السلام عليكم
        </Typography>
      </Box>


      <Box 
        sx={{
            textAlign: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 3,
            padding: { xs: 1.5, sm: 2 },           // уменьшили внутренние отступы
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            mb: 2,
            maxWidth: { xs: '60%', sm: '60%', md: '60%' }, // ограничили ширину
            mx: 'auto'  // чтобы центрировать по горизонтали
        }}
        >
        <Typography 
            variant="h1"
            sx={{ 
            fontWeight: 'bold',
            color: theme.palette.text.secondary,
            fontSize: { xs: '1.3rem', sm: '1.8rem' } // уменьшили размер текста
            }}
        >
            Ready to learn Arabic?
        </Typography>
    </Box>


 
    </header>
    )
    

    
}