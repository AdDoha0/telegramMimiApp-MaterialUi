import React from 'react';
import { Container, Typography, Box } from '@mui/material';


import Header from "@/shared/ui/Header"
import SearchBar from "@/shared/ui/Search"
import ExpandableSection from "@/features/lessons/sections/ExpandableSection"

import { useTheme } from '@mui/material/styles';

export default function LessonPage() {
  const theme = useTheme();

  const handleSearch = (query) => {
    console.log("Поиск по:", query);
  };

    return (
      <>
        
        {/* <Header>HUNA ARABIC</Header> */}

        <SearchBar onSearch={handleSearch} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Разделы уроков
      </Typography>

      <ExpandableSection/>
    </>
  );
}