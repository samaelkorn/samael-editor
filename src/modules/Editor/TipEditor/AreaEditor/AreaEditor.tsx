import { EditorContent } from '@tiptap/react'
import type { Editor } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import './style.scss'

interface TP {
    editor: Editor
}

export const AreaEditor: React.FC<TP> = ({ editor }) => {
    return (
        <Box sx={{ padding: 2, height: '100vh' }}>
            <Paper sx={{ height: '100%' }}>
                <Typography>Введите текст</Typography>
                <EditorContent editor={editor} />
            </Paper>
        </Box >
    )
}