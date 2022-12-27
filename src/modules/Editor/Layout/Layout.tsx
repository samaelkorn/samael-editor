import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ProviderTypePage } from './Context'
import { ZoneEditor } from './ZoneEditor'


interface TLayout {
    editor: React.ReactElement
    panel: React.ReactElement
}

export const Layout: React.FC<TLayout> = ({ editor, panel }) => {


    return (
        <ProviderTypePage>
            <CssBaseline />
            <Box component="main" sx={{ display: 'flex' }}>
                <ZoneEditor>
                    {editor}
                </ZoneEditor>
                <Box sx={{ width: 400, height: '100vh' }}>
                    {panel}
                </Box>
            </Box>
        </ProviderTypePage>
    )
}