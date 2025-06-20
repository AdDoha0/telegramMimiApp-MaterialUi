import React from 'react';
import { Box, InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

export default function SearchBar({ onSearch }) {
  const theme = useTheme();
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        // alignContent: "center",
        alignItems: 'center',
        borderRadius: 3,
        padding: '10px 8px',
        bgcolor: theme.palette.background.paper,
        boxShadow: 1,
        // maxWidth: 400,
        width: '100%',
        marginBottom: 3,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        border: "solid",
        borderColor: theme.palette.custom.border,
        borderWidth: "1px",
        width: '100%',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск курса по названию"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton onClick={handleSearch} sx={{ color: theme.palette.primary.main }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
