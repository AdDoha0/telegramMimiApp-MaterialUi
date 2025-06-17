import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';

function CustomBottomNavigation() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) =>  {
        setValue(newValue);
        console.log('Выбрана вкладка:', newValue)
    };

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                borderTop: "1px solid #e0e0e0", 
                height: {xs: 60, sm: 70}
            }}
            elevation={8}
        >

            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                sx={{
                    height: '100%',
                    '& .MuiBottomNavigationAction-root': {
                    minWidth: 60,      // Минимальная ширина вкладки
                    fontSize: '0.75rem' // Размер текста подписей
                    },
                    // Стили для активной вкладки
                    '& .Mui-selected': {
                        color: '#D4834A !important'  // Оранжевый цвет (как в дизайне)
                    }
                }}
            >
                <BottomNavigationAction 
                    label="Lessons"
                    icon={<MenuBookIcon/>}
                    sx={{
                        // Адаптивные размеры иконки
                        '& .MuiSvgIcon-root': {
                        fontSize: { xs: '1.2rem', sm: '1.5rem' }
                        }
                    }}
                />

                {/* Вторая вкладка - Практика */}
                <BottomNavigationAction 
                label="Practice" 
                icon={<EditIcon />}       // Иконка карандаша
                sx={{
                    '& .MuiSvgIcon-root': {
                    fontSize: { xs: '1.2rem', sm: '1.5rem' }
                    }
                }}
                />


                 {/* Третья вкладка - Профиль */}
                <BottomNavigationAction 
                label="Profile" 
                icon={<PersonIcon />}     // Иконка человека
                sx={{
                    '& .MuiSvgIcon-root': {
                    fontSize: { xs: '1.2rem', sm: '1.5rem' }
                    }
                }}
                />
            </BottomNavigation>
        </Paper>
    );
}



export default CustomBottomNavigation; 