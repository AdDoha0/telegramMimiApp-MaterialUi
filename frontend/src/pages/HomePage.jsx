import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import Header from "@/shared/ui/Header"
import SearchBar from "@/shared/ui/Search"
import CurseCardSection from '@/features/lessons/sections/CurseCardSection';
import { LessonCardListSection } from "@/features/lessons/sections/LessonScrollSection"


export default function HomePage() {
  const handleSearch = (query) => {
    console.log("Поиск по:", query);
  };

  return (
    <>
      
      <Header>HUNA ARABIC</Header>

      <SearchBar onSearch={handleSearch} />

    <Box>
        <Typography
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 2,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          Интересное
        </Typography>
        {/* variant="subtitle1" */}
    <CurseCardSection />
        
    </Box>
      <Typography
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: 2,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          Уроки
        </Typography>
      {/* Секция Lessons */}
      <LessonCardListSection />

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
          Links
        </Typography>
      </Box>

    </>
  );
}
