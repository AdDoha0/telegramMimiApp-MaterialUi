

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
    mode: 'dark',
    primary: {
      main: '#A3FF2F', // яркий салатовый (для активных иконок, кнопок)
    },
    secondary: {
      main: '#C084FC', // сиренево-фиолетовый (для кнопок, заголовков, акцентов)
    },
    background: {
      default: '#0E1117', // общий фон (очень тёмно-синий/чёрный)
      paper: '#161B22',   // карточки, блоки
    },
    text: {
      primary: '#FFFFFF',     // основной белый текст
      secondary: '#A0AEC0',   // сероватый вторичный текст
    },
    custom: {
      avatarBg: '#2D3748',    // фон под аватарки или метки
      tagBgGreen: '#A3FF2F',  // цвет бэйджей "имя", "AI"
      tagTextDark: '#141414', // цвет текста на салатовых кнопках
      purpleAccent: '#C084FC', // фиолетовый для грамматики и кнопок
      border: "#222b4f",
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