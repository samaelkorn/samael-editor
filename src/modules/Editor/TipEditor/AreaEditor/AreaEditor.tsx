import { EditorContent } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useEditor } from 'modules/Editor/TipEditor/Context'

import './style.scss'

export const AreaEditor: React.FC = () => {
    const { editor } = useEditor()

    const handle = (target: any) => {
        if (target.classList && target.classList.contains('MuiPaper-root')) {
            editor.commands.focus('end')
        }
    }

    return (
        <Box sx={{ padding: 2, height: '100vh' }}>
            <Paper sx={{ height: '100%' }} onClick={({ target }) => handle(target)}>
                <Typography>Введите текст</Typography>
                <EditorContent editor={editor} />
            </Paper>
        </Box >
    )
}