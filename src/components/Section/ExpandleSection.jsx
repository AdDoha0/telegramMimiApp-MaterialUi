

import { useTheme } from '@mui/material/styles';

export default function ExpandableSection() {
    const theme = useTheme()
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <ExpandableBar
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
        </Box>
    
      <Box sx={{ flexGrow: 1 }}>
          <ExpandableBar
            title="Средний уровень"
            items={["Мудари", "Масдар", "Виды множественного", "Мафуль", "Идхафа"]}
          />
      </Box>           
    </>
    );
}