import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useTypePage } from 'modules/Editor/Layout/Context'

export const TypePage = () => {

    const { type, setType, setImage } = useTypePage()

    const addImage = () => {
        const url = window.prompt('нужен бэк чтобы сохранять картинку, пока ссылкой')

        if (url) {
            setImage(url)
        }
    }

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography>Тип страницы</Typography>
            <Button onClick={() => setType('fullWidth')} size="small" variant="contained" sx={{ marginRight: 1 }}>
                fullWidth
            </Button>
            <Button onClick={() => setType('image')} size="small" variant="contained" sx={{ marginRight: 1 }}>
                image
            </Button>
            {type === 'image' && <Button onClick={() => addImage()} size="small" variant="contained">
                setImage
            </Button>}
        </Box>
    )
}