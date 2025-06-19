import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CustomBottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState(0);

    const routes = ['/', '/lessons', '/favorites'];

    useEffect(() => {
        const index = routes.findIndex(route => route === location.pathname);
        setValue(index !== -1 ? index : 0);
    }, [location.pathname]);


    const handleChange = (event, newValue) => {
        navigate(routes[newValue]);
    };

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)",
                maxWidth: 400,
                zIndex: 1000,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                height: 60,
                border: "none"
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
                    label="Главная"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: '1.8rem' } }}
                />
                <BottomNavigationAction 
                    icon={<MenuBookIcon />}
                    label="Уроки"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: '1.8rem' } }}
                />
                <BottomNavigationAction 
                    icon={<StarIcon />}
                    label="Избранное"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: '1.8rem' } }}
                />
            </BottomNavigation>
        </Paper>
    );
}
