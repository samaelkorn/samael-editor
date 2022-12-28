import type { Editor } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface TP {
    editor: Editor
}

export const Link: React.FC<TP> = ({ editor }) => {
    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography>Button</Typography>
            <Box sx={{ marginBottom: 2 }}>
                <Button onClick={() => editor.chain().focus().addButton().run()} variant="contained" size="small">
                    Add
                </Button>
            </Box>
        </Box>
    )
}