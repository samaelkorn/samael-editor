import type { Editor } from '@tiptap/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface TP {
    editor: Editor
}

export const Image: React.FC<TP> = ({ editor }) => {

    const addImage = () => {
        const url = window.prompt('нужен бэк чтобы сохранять картинку, пока ссылкой')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <Box sx={{marginBottom: 2}}>
            <Typography>Изображение</Typography>
            <Button onClick={addImage} variant="contained" size="small">Добавить</Button>
        </Box>
    )
}