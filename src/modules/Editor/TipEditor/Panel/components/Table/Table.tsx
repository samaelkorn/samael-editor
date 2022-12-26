import type { Editor } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

interface TP {
    editor: Editor
}

export const Table: React.FC<TP> = ({ editor }) => {

    const buttons = [
        {
            id: ' insert',
            name: 'Добавить',
            handler: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        },
        {
            id: ' delete',
            name: 'Удалить',
            handler: () => editor.chain().focus().deleteTable().run()
        },
    ]

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography>Таблица</Typography>
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