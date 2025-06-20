import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


export default function CustomBottomNavigation() {
    const theme = useTheme();
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
                bottom: { xs: 8, sm: 16 },
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 16px)",
                maxWidth: { xs: '100%', sm: 400 },
                zIndex: 1000,
                borderRadius: { xs: '16px', sm: '24px' },
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                height: { xs: 52, sm: 60 },
                border: "none",
                backgroundColor: "#c8ced9"
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
                        minWidth: 48,
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        padding: { xs: '4px 0', sm: '6px 0' },
                    },
                    '& .Mui-selected': {
                        color: " #09213b" + '!important',
                    },
                    '& .MuiBottomNavigationAction-label': {
                        marginTop: '4px',
                    }
                }}
            >
                <BottomNavigationAction 
                    icon={<HomeFilledIcon sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' } }} />}
                />
                <BottomNavigationAction 
                    icon={<MenuBookIcon sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' } }} />}
                />
                <BottomNavigationAction 
                    icon={<StarIcon sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem' } }} />}
                />
            </BottomNavigation>
        </Paper>
    );
}
