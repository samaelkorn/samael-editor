import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import {
    Editor,
    EditorState
} from 'draft-js'

export const AreaEditor: React.FC = () => {

    const editor = useRef<Editor>(null)
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

    return (
        <Box sx={{ padding: 2 }}>
            <Paper>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={setEditorState}
                />
            </Paper>
        </Box>

    )
}