// import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import HeaderForLessonPage from "@/features/lessons/HeaderForLessonPage"

// src/pages/LessonPage.jsx
import React from 'react';
import { Container, Paper, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const lesson = {
  title: 'Артикль аль (ال)',
  description: `В этом уроке мы познакомимся с определённым артиклем "аль" (ال) в арабском языке, его значением, написанием, правилами произношения с солнечными и лунными буквами`,
  videoUrl: '', // Пока видео нет, будет заглушка
  topics: [
    'Значение артикля "аль"',
    'Форма и написание',
    'Cолнечные и лунные буквы ',
    'Артикль с хамзой и алифом',
    'Артикль с именами',
  ],
  task: `написать сочинение`,
  text: `Артикль аль (ال) — это определённый артикль в арабском языке. Он соответствует определённости, как слово «этот» или «тот самый» в русском языке. Артикль аль всегда пишется перед словом и состоит из двух букв: алиф и лам. Он пишется слитно с последующим словом и обозначает, что предмет известен или уже упоминался.

كِتاب — книга (неопределённая)
الكِتاب — книга (определённая, то есть «эта книга»)

Артикль аль не переводится напрямую, но он меняет значение слова на определённое.

Слова, начинающиеся после аль, делятся по типу первой буквы на два вида: солнечные и лунные. Это влияет на произношение артикля.
        `
};

export default function LessonPage() {
  const theme = useTheme();
  return (
    <>
      <Paper elevation={0} sx={{
        p: { xs: 2, sm: 4 },
        borderRadius: 4,    
        backgroundColor: theme.palette.background.default,
      }}>
        {/* Заголовок */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {lesson.title}
        </Typography>
        {/* Краткое описание */}
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {lesson.description}
        </Typography>

        {/* Видео-заглушка */}
        <Box
          sx={{
            mt: 4,
            mb: 4,
            width: '100%',
            height: { xs: 180, sm: 320 },
            background: 'linear-gradient(135deg, #90caf9 0%, #e3f2fd 100%)',
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 80, color: '#1976d2' }} />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 0,
              width: '100%',
              textAlign: 'center',
              opacity: 0.7,
            }}
          >
            Видео-урок (заглушка)
          </Typography>
        </Box>

        {/* Список тем */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Темы урока
        </Typography>
        <List>
          {lesson.topics.map((topic, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={topic} />
            </ListItem>
          ))}
        </List>



        <Box sx={{ my: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Теория урока
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {lesson.text}
          </Typography>
      </Box>

        <Divider sx={{ my: 3 }} />

        {/* Блок с заданием */}
        <Box
          sx={{
            background: '#f5f5f5',
            borderRadius: 2,
            p: 2,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <InfoOutlinedIcon color="primary" sx={{ mt: 0.5 }} />
          <Box sx={{ colo: theme.palette.background.paper }}>
            <Typography variant="subtitle1" fontWeight={600}>
              Домашнее задание
            </Typography>
            <Typography variant="body1" >{lesson.task}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

