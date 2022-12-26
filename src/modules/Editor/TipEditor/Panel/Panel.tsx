import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import type { Editor } from '@tiptap/react'

import { Text, Image, Table } from './components'

interface TP {
    editor: Editor
}

export const Panel: React.FC<TP> = ({ editor }) => {
    return (
        <Paper sx={{ height: '100vh', padding: 2 }}>
            <Box>
                <span>назад</span>
                <Text editor={editor} />
                <Image editor={editor} />
                <Table editor={editor} />
            </Box>
        </Paper>
    )
}