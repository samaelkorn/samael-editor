import type { Editor } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

interface TP {
    editor: Editor
}

export const Save: React.FC<TP> = ({ editor }) => {
    const buttons = [
        {
            id: ' html',
            name: 'Html',
            handler: () => localStorage.setItem('saveHtml', editor.getHTML())
        },
    ]

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography>Сохранить</Typography>
            <Box sx={{ marginBottom: 2 }}>
                <ButtonGroup variant="contained" size="small">
                    {buttons.map((item =>
                        <Button key={item.id}
                            onClick={item.handler}>
                            {item.name}
                        </Button>)
                    )}
                </ButtonGroup>
            </Box>
        </Box>
    )
}