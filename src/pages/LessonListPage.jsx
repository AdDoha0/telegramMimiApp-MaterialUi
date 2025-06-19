import React from 'react';
import { Container, Typography } from '@mui/material';
import ExpandableSection from '../components/ExpandableSection';


export default function LessonPage() {
    return (
      <>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Разделы уроков
      </Typography>

        <ExpandableSection
          title="Первые шаги"
          items={[
            "Состояния Имён",
            "Описание",
            "Множественное число",
            "Указательные местоимения",
            "Относительные местоимения",
            "Образование по шаблону",
            "Прошедшее время",
            "Связанные местоимения",
            "Прямое дополнение",
            "Двойственные имена"
          ]}
        />

      <ExpandableSection
        title="Средний уровень"
        items={["Мудари", "Масдар", "Виды множественного", "Мафуль", "Идхафа"]}
      />
      </>
    );
}