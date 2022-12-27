import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import { useEditor } from 'modules/Editor/TipEditor/Context'
import { Text, Image, Table, Save } from './components'


export const Panel: React.FC = () => {
    const { editor } = useEditor()

    return (
        <Paper sx={{ height: '100vh', padding: 2 }}>
            <Box>
                <span>назад</span>
                <Text editor={editor} />
                <Image editor={editor} />
                <Table editor={editor} />
                <Save editor={editor} />
            </Box>
        </Paper>
    )
}