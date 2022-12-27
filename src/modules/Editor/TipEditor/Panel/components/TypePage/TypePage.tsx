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
            <Button onClick={() => setType('fullWidth')} color="inherit">
                fullWidth
            </Button>
            <Button onClick={() => setType('image')} color="inherit">
                image
            </Button>
            {type === 'image' && <Button onClick={() => addImage()} color="inherit">
                setImage
            </Button>}
        </Box>
    )
}