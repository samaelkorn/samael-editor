import type { Level } from '@tiptap/extension-heading'
import type { Editor } from '@tiptap/react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TP {
    editor: Editor
}

export const Text: React.FC<TP> = ({ editor }) => {

    const levels: Level[] = [1, 2, 3, 4, 5, 6]
    const types = [
        {
            name: 'bold',
            handler: () => editor.chain().focus().toggleBold().run()
        },
        {
            name: 'italic',
            handler: () => editor.chain().focus().toggleItalic().run()
        },
    ]
    const changeHeading = (number: Level) => {
        editor.chain().focus().toggleHeading({ level: number }).run()
    }

    const colors = [
        {
            name: 'red',
            field: '#fa0b0b'
        },
        {
            name: 'blue',
            field: '#00b3ff'
        },
    ]

    const changeColor = (color: string) => {
        editor.chain().focus().setColor(color).run()
    }

    const align = [
        {
            name: 'left',
        },
        {
            name: 'center',
        },
        {
            name: 'right',
        },
    ]

    const changeAlign = (aling: string) => {
        editor.chain().focus().setTextAlign(aling).run()
    }

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography>Текст</Typography>
            <Box sx={{ marginBottom: 2 }}>
                <ButtonGroup variant="contained" size="small">
                    {levels.map((item =>
                        <Button key={item}
                            onClick={() => changeHeading(item)}
                            color={editor.isActive('heading', { level: item }) ? 'primary' : 'inherit'}>
                            h{item}
                        </Button>)
                    )}
                </ButtonGroup>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
                <ButtonGroup variant="contained" size="small">
                    {types.map((item =>
                        <Button key={item.name}
                            onClick={item.handler}
                            color={editor.isActive(item.name) ? 'primary' : 'inherit'}>
                            {item.name}
                        </Button>)
                    )}
                </ButtonGroup>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
                <ButtonGroup variant="contained" size="small">
                    {colors.map((item =>
                        <Button key={item.name}
                            onClick={() => changeColor(item.field)}
                            color={editor.isActive('textStyle', { color: item.field }) ? 'primary' : 'inherit'}>
                            {item.name}
                        </Button>)
                    )}
                    <Button onClick={() => editor.chain().focus().unsetColor().run()} color="inherit">
                        Clear
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
                <ButtonGroup variant="contained" size="small">
                    {align.map((item =>
                        <Button key={item.name}
                            onClick={() => changeAlign(item.name)}
                            color={editor.isActive({ textAlign: item.name }) ? 'primary' : 'inherit'}>
                            {item.name}
                        </Button>)
                    )}
                    <Button onClick={() => editor.chain().focus().unsetTextAlign().run()} color="inherit">
                        Clear
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}