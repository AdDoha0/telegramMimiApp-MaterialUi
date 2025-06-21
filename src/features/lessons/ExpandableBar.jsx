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


export default function ExpandableBar({ title, items }) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(prev => !prev);

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', mb: 2 }}>
    {/* Вертикальная линия */}
    <Box
      sx={{
        width: '4px',
        bgcolor: theme.palette.primary.main,
        borderRadius: '2px',
        mr: 2,
      }}
    />
        <Box sx={{ width: '100%', mb: 1 }}>
          <ListItemButton
            onClick={handleToggle}
            sx={{
              // backgroundColor: theme.palette.primary.main,
              borderRadius: '12px',
              px: 2,
              py: 1.5,
              mb: 0.5,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.text.secondary
              }
            }}
          >
            <ListItemText
              primary={
                <Typography sx={{ color: theme.palette.text.main, fontWeight: 'bold', fontSize: '1rem' }}>
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
                    color: theme.palette.text.disabled,
                    '&:hover': { backgroundColor: theme.palette.text.secondary }
                  }}
                  onClick={() => console.log('Clicked:', item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Box>
    </Box>

  );
}
