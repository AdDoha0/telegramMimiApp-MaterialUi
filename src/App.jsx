import React from "react"


import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout ";
import HomePage from "./pages/HomePage";
import LessonListPage from "./pages/LessonListPage/"
// import LessonPage from "./pages/LessonPage"




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>   
          <Route path="/" element={<HomePage/>}/>
          <Route path="/textbooks" element={<LessonListPage/>}/>
          {/* <Route path="/textbook/:id" element={<LessonPage/>}/> */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}
