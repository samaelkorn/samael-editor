import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

interface TLayout {
    editor: React.ReactElement
    panel: React.ReactElement
}

export const Layout: React.FC<TLayout> = ({ editor, panel }) => {
    return (
        <>
            <CssBaseline />
            <Box component="main" sx={{ display: 'flex' }}>
                <Box sx={{ width: '100%' }}>
                    {editor}
                </Box>
                <Box sx={{ width: 400, height: '100vh' }}>
                    {panel}
                </Box>
            </Box>
        </>
    )
}