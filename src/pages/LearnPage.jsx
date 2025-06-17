

// src/pages/LearnPage.jsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import ProgressBar from '../components/ProgressCard/ProgressCard';
import LessonCard from '../components/LessonCard/LessonCard'; 
import CustomBottomNavigation from '../components/NavBar';



export default function LearnPage() {
  return (
   <> 
    <Container 
      maxWidth="sm"  // sm = 600px максимум (идеально для мобильных)
      sx={{ 
        padding: { xs: 1, sm: 2 },  // xs (мобильные) = 8px, sm+ = 16px
        minHeight: '100vh',         // минимальная высота = высота экрана
        backgroundColor: '#f8f9fa',  // светло-серый фон
        paddingBottom: { xs: 8, sm: 10 }  // ← Добавь эту строку                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          // светло-серый фон

      }}
    >
      
      {/* Заголовок страницы */}
      <Box sx={{ 
        textAlign: 'center',           // текст по центру
        marginBottom: { xs: 3, sm: 4 }, // отступ снизу (мобильные меньше)
        paddingTop: 2                  // отступ сверху
      }}>
        <Typography 
          variant="h3"           // размер заголовка (большой)
          component="h1"         // HTML тег h1 для SEO
          sx={{ 
            fontWeight: 'bold',          // жирный шрифт
            color: '#333',               // темно-серый цвет
            fontSize: { xs: '1.8rem', sm: '2.5rem' }  // адаптивный размер
          }}
        >
          Learn Arabic
        </Typography>
      </Box>

      {/* Секция Progress */}
      <Box sx={{ marginBottom: { xs: 3, sm: 4 } }}>
        <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
                fontWeight: 'bold', 
                marginBottom: 2,
                fontSize: { xs: '1.2rem', sm: '1.5rem' }  // адаптивный размер
            }}
        >
        Progress
        </Typography>
        <ProgressBar/>
    </Box>

      {/* Секция Lessons */}
      <Box sx={{ marginBottom: { xs: 3, sm: 4 } }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 2,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          Lessons
        </Typography>
        
        {/* Временные заглушки для карточек уроков */}
        <LessonCard>Alphabet - Beginner • 10 lessons</LessonCard>
        <LessonCard>Basic Phrases - Beginner • 12 lessons</LessonCard>

      </Box>

      {/* Секция Textbook */}
      <Box sx={{ marginBottom: { xs: 3, sm: 4 } }}>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 2,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          Textbook
        </Typography>
        <LessonCard>Arabic for Beginners</LessonCard>
      </Box>
    </Container>
    <CustomBottomNavigation />
  </>

  );
}
