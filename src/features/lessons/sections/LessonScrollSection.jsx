import { Container, Box, Typography } from "@mui/material";
import LessonCard from '@/features/lessons/LessonCard';
import Grid from '@mui/material/Grid';

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
    <Container sx={{ mb: 4 }} disableGutters maxWidth={false}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {lessons.map((lesson, idx) => (
          <Grid item size={{xs:12, sm:6 }} key={idx}>
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