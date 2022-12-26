import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export const Panel: React.FC = () => {
    return (
        <Paper sx={{ height: '100vh', padding: 2 }}>
            <Box>
                <span>назад</span>
            </Box>
        </Paper>
    )
}