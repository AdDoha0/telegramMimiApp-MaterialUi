

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    //  mode: 'dark',
    primary: {
      main: '#2F855A', // глубокий зелёный (кнопки, выделения)
    },
    secondary: {
      main: '#C08457', // тёплый песочный / медный для акцентов
    },
    background: {
      default: '#1A1E23', // основной фон
      paper: '#252A30',   // фон карточек
    },
    text: {
      primary: '#E2E8F0',   // светлый текст (основной)
      secondary: '#A0AEC0', // вторичный текст
    },
    custom: {
      avatarBg: '#3E4A3C', // нейтральный тёмный для аватарок
    },
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