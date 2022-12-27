import { createContext } from 'react'
import type { Editor } from '@tiptap/react'

interface ContextType {
    editor: Editor
}

export const Context = createContext<ContextType>(null!)
