import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function CustomBottomNavigation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('Выбрана вкладка:', newValue);
    };

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 16, // Добавим отступ снизу для лучшего вида
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)", // Оставляем отступы по бокам
                maxWidth: 400, // Максимальная ширина для больших экранов
                zIndex: 1000,
                borderRadius: "24px", // Закругление углов
                overflow: "hidden", // Скрываем углы BottomNavigation
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)", // Красивая тень
                height: 60,
                border: "none" // Убираем стандартную границу
            }}
        >
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                sx={{
                    height: '100%',
                    backgroundColor: "transparent",
                    '& .MuiBottomNavigationAction-root': {
                        minWidth: 60,
                        fontSize: '0.75rem',
                        padding: '6px 0',
                    },
                    '& .Mui-selected': {
                        color: '#D4834A !important',
                    },
                    '& .MuiBottomNavigationAction-label': {
                        marginTop: '4px',
                    }
                }}
            >
                <BottomNavigationAction 
                    icon={<HomeFilledIcon />}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: '1.8rem'
                        }
                    }}
                />
                <BottomNavigationAction 
                    icon={<MenuBookIcon />}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: '1.8rem'
                        }
                    }}
                />
                <BottomNavigationAction 
                    icon={<StarIcon />}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: '1.8rem'
                        }
                    }}
                />
            </BottomNavigation>
        </Paper>
    );
}