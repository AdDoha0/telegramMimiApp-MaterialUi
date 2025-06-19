import React, { useState } from 'react';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';


export default function ExpandableSection({ title, items }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(prev => !prev);

  return (
    <Box sx={{ width: '100%', mb: 1 }}>
      <ListItemButton
        onClick={handleToggle}
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: '12px',
          px: 2,
          py: 1.5,
          mb: 0.5,
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2b2b2b'
          }
        }}
      >
        <ListItemText
          primary={
            <Typography sx={{ color: "#F5F5F5", fontWeight: 'bold', fontSize: '1rem' }}>
              {title}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {items.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                pl: 4,
                py: 1,
                borderRadius: '8px',
                color: '#ccc',
                '&:hover': { backgroundColor: '#333' }
              }}
              onClick={() => console.log('Clicked:', item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}
