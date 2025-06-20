
import React from 'react';

import { Container, Typography, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ProgressBar from '../components/ProgressCard/ProgressCard';
import LessonCard from '../components/LessonCard/LessonCard'; 
import Header from "../components/Header/Header"
import AchievementCard from "../components/LessonCard/AchievementCard"
import SearchBar from "../components/Search"


export default function HomePage() {
  const handleSearch = (query) => {
    console.log("Поиск по:", query);
  };

  return (
    <>
      
      <Header>HUNA ARABIC</Header>

      <SearchBar onSearch={handleSearch} />

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

    <Box sx={{ 
      marginBottom: 2, 
      display: 'flex', 
      gap: 2, 
      overflowX: 'auto',
      paddingBottom: 1,
    }}>
      {/* <AchievementCard 
        title="Starter" 
        icon={<EmojiEventsIcon sx={{ fontSize: 50 }}  />} 
        color="#FFD700" // золотой
      />
      <AchievementCard 
        title="Pro Learner" 
        icon={<StarIcon sx={{ fontSize: 50 }} />} 
        color="#D4834A"
      />
      <AchievementCard 
        title="Completed 10" 
        icon={<CheckCircleIcon sx={{ fontSize: 50 }} />} 
        color="#4caf50" // зелёный
      /> */}
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
        
        <LessonCard 
            title="Alphabet" 
            subtitle="Beginner • 10 lessons" 
        />

        <LessonCard 
            title="Basic Phrases" 
            subtitle="Beginner • 12 lessons" 
        />

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
        <LessonCard 
            title="Grammar Basics"
            subtitle="Beginner • 14 lessons"
        />
      </Box>

    </>
  );
}
