import { EditorContent } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useEditor } from 'modules/Editor/TipEditor/Context'

import './style.scss'

export const AreaEditor: React.FC = () => {

    const { editor } = useEditor()

    return (
        <Box sx={{ padding: 2, height: '100vh' }}>
            <Paper sx={{ height: '100%' }}>
                <Typography>Введите текст</Typography>
                <EditorContent editor={editor} />
            </Paper>
        </Box >
    )
}