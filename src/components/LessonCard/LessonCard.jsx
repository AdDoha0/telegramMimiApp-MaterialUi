
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
                padding: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                mb: 2, // отступ снизу между карточками
            }}
        >
          <Avatar
            sx={{
                backgroundColor: theme.palette.custom.avatarBg,
                color: theme.palette.secondary.main,
                mr: 2,
                width: 48,
                height: 48,
            }}
          >
            {icon || <MenuBookIcon />}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
                variant="subtitle1" 
                sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' } }}
                >
                {title}
            </Typography>
            <Typography
                variant='body2'
                color="text.secondary"
                sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                >
                { subtitle }
            </Typography>
          </Box>
            <IconButton IconButton edge="end">
                <ChevronRightIcon />
            </IconButton>
        </Box>
        

    )
} 