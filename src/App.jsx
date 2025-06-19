import React from "react"


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';


import MainLayout from "./MainLayout ";
import HomePage from "./pages/HomePage";
import LessonListPage from "./pages/LessonListPage/"
// import LessonPage from "./pages/LessonPage"
import theme from "./theme"


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonListPage />} />
            {/* <Route path="/lessons/:id" element={<LessonPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}