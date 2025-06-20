import React from 'react';
import { Container, Typography, Box } from '@mui/material';


import Header from "../components/Header/Header"
import SearchBar from "../components/Search"
import ExpandableSection from "../components/ExpandableBar"

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