import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import PersonIcon from '@mui/icons-material/Person';



import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';



export default function CustomBottomNavigation() {

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
                    icon={<HomeFilledIcon/>}
                    sx={{
                        // Адаптивные размеры иконки
                        '& .MuiSvgIcon-root': {
                        fontSize: { xs: '2rem', sm: '2.3rem' }
                        }
                    }}
                />

                {/* Вторая вкладка - Практика */}
                <BottomNavigationAction 

                icon={<MenuBookIcon />}       // Иконка карандаша
                sx={{
                    '& .MuiSvgIcon-root': {
                    fontSize: { xs: '2rem', sm: '2.3rem' }
                    }
                }}
                />


                 {/* Третья вкладка - Профиль */}
                <BottomNavigationAction 

                icon={<StarIcon />}     // Иконка человека
                sx={{
                    '& .MuiSvgIcon-root': {
                    fontSize: { xs: '2rem', sm: '2.3rem' }
                    }
                }}
                />
            </BottomNavigation>
        </Paper>
    );
}
 