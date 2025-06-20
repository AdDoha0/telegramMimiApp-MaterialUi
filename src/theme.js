

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
    mode: 'dark',
    primary: {
      main: '#54a0ff', 
    },
    secondary: {
      main: '#FFDD57', // сиренево-фиолетовый (для кнопок, заголовков, акцентов)
    },
    background: {
      default: '#eceff8', // общий фон (очень тёмно-синий/чёрный)
      paper: '#f7f8fc',   // карточки, блоки
    },
    text: {
      highlighted: '#0f2238',  
      primary: '#374151',     // основной белый текст
      secondary: '#A0AEC0',   // сероватый вторичный текст
    },
    custom: {
      avatarBg: '#c8ced9',    // фон под аватарки или метки
      tagBgGreen: '#A3FF2F',  // цвет бэйджей "имя", "AI"
      tagTextDark: '#141414', // цвет текста на салатовых кнопках
      border: "#FFF",
    }
  },
 
});

export default theme;



//  typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h5: {
//       fontWeight: 700,
//     },
//     subtitle1: {
//       fontWeight: 600,
//     },
//   },
//   shape: {
//     borderRadius: 12, // красиво скруглены карточки и кнопки
//   },