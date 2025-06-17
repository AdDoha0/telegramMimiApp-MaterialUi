
import { Container, Typography, Box } from '@mui/material';



export default function LessonCard({ children }) {
    return (
        <Box sx={{ 
          backgroundColor: '#ffffff',
          padding: { xs: 2, sm: 3 },
          borderRadius: 3,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          marginBottom: 2
        }}>
          <Typography variant="body1">
            {children}
          </Typography>
        </Box>
        

    )
} 