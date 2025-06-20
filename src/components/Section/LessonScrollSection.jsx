import { Container, Box, Typography } from "@mui/material";
import CourseCard from "../LessonCard/CurseCarcd";
import LessonCard from '../LessonCard/LessonCard';
import Grid from '@mui/material/Grid';

export default function CurseCardSection() {
    const lessons = [
        {
        title: "Аль-Аджуррумия",
        lessonsCount: 21,
        level: "A2",
        image: "https://dummyimage.com/600x300/8B0000/ffffff&text=Аль-Аджуррумия"
        },
        {
        title: "Сарф Основы",
        lessonsCount: 18,
        level: "A1",
        image: "https://dummyimage.com/600x300/8B0000/ffffff&text=Аль-Аджуррумия"
        },
    ]
    return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          paddingBottom: 1,
          scrollSnapType: "x mandatory", // плавный скролл
          "&::-webkit-scrollbar": { display: "none" }, // скрыть скроллбар
          scrollPadding: { xs: 1, sm: 2 },
        }}
      >
        {lessons.map((lesson, index) => (
          <Box key={index} sx={{ 
            scrollSnapAlign: "start",
            flex: "0 0 auto",     
            minWidth: { xs: 220, sm: 250, md: 300 },
            maxWidth: { xs: 260, sm: 320, md: 360 },
          }}>
            <CourseCard
              title={lesson.title}
              lessonsCount={lesson.lessonsCount}
              level={lesson.level}
              image={lesson.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}



export function LessonCardListSection() {

  const lessons = [
    {
      title: 'Алфавит',
      subtitle: 'Базовый уровень • 10 уроков',
    },
    {
      title: 'Приветствия и знакомства',
      subtitle: 'Базовый уровень • 8 уроков',
    },
    {
      title: 'Местоимения',
      subtitle: 'Начальный уровень • 12 уроков',
    },
    {
      title: 'Глаголы ',
      subtitle: 'Средний уровень • 15 уроков',
    }
  ];

  return (
    <Container sx={{ mb: 4 }}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {lessons.map((lesson, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <LessonCard
              title={lesson.title}
              subtitle={lesson.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}