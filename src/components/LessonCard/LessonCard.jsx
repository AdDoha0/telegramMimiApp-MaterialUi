import { Typography, Box, Avatar, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook'; // можно заменить иконку по ситуации
import { useTheme } from '@mui/material/styles';


export default function LessonCard({ title,  subtitle, icon }) {
    const theme = useTheme();

    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                padding: { xs: 1, sm: 2 },
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                mb: 2, // отступ снизу между карточками
                border: "solid",
                borderColor: theme.palette.custom.border,
                borderWidth: "1px",
                minWidth: { xs: 200, sm: 250 },
                maxWidth: { xs: '100%', sm: 400 },
                width: '100%',
            }}
        >
          <Avatar
            sx={{
                backgroundColor: theme.palette.custom.avatarBg,
                color: theme.palette.primary.main,
                mr: 2,
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
            }}
          >
            {icon || <MenuBookIcon />}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
                variant="subtitle1" 
                sx={{ color: theme.palette.text.primary,  fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' } }}
                >
                {title}
            </Typography>
            <Typography
                variant='body2'
                color="text.secondary"
                sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                >
                { subtitle }
            </Typography>
          </Box>
            <IconButton edge="end" sx={{ ml: { xs: 0.5, sm: 1 } }}>
                <ChevronRightIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
        </Box>
        

    )
} 