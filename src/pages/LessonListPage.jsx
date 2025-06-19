import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const lessons = [
  {
    section: 'ПЕРВЫЕ ШАГИ',
    topics: [
      { title: 'Состояния Имен', arabic: 'الحالات الإعرابية للأسماء' },
      { title: 'Описание', arabic: 'الصفة، النعت' },
      { title: 'Множественное Число', arabic: 'الجمع' },
      { title: 'Указательные Местоимения', arabic: 'أسماء الإشارة' },
      { title: 'Относительные Местоимения', arabic: 'الأسماء الموصولة' },
      { title: 'Образование Слова По Шаблону', arabic: 'المشتقات' },
      { title: 'Глагол Прошедшего Времени', arabic: 'الفعل الماضي' },
      { title: 'Связанные Местоимения', arabic: 'الضمائر المنفصلة' },
      { title: 'Прямое Дополнение', arabic: 'المفعول به' },
      { title: 'Двойственные Имена', arabic: 'المثنى' },
    ]
  },
  // {
  //   section: 'СРЕДНИЙ УРОВЕНЬ',
  //   topics: []
  // },
  // {
  //   section: 'ПРОИЗВОДНЫЕ',
  //   topics: []
  // },
  // {
  //   section: 'ДЕТАЛЬНЕЕ',
  //   topics: []
  // },
  // {
  //   section: 'ГЛАГОЛЫ',
  //   topics: []
  // },
  // {
  //   section: 'ПОРОДЫ ГЛАГОЛОВ',
  //   topics: []
  // }
];

export default function LessonPage() {
    return (
      <>
      <Box sx={{ mt: 2 }}>
        {lessons.map((group, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
            >
              {group.section}
            </Typography>

            <List disablePadding>
              {group.topics.map((topic, i) => (
                <React.Fragment key={i}>
                  <ListItem
                    button
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                      backgroundColor: '#fff',
                      mb: 1,
                      boxShadow: 1,
                      '&:hover': { backgroundColor: '#f5f5f5' }
                    }}
                  >
                    <ListItemText 
                      primary={topic.title} 
                      secondary={topic.arabic} 
                      primaryTypographyProps={{ fontWeight: 500 }}
                      secondaryTypographyProps={{ dir: 'rtl', fontSize: '1rem' }}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>

            {group.topics.length === 0 && (
              <Typography variant="body2" color="text.secondary">
                (в разработке)
              </Typography>
            )}
          </Box>
        ))}
      </Box>
      </>
    );
}