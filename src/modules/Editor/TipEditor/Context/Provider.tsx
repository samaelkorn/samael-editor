
import { Context } from './context'
import { useEditor } from '@tiptap/react'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import { TextSize } from './Extension/TextSize'
import { ButtonExtension } from './Extension/Button'

import { save } from './save'

interface TP {
    children: React.ReactNode
}

const CustomTableCell = TableCell.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            backgroundColor: {
                default: null,
                parseHTML: element => element.getAttribute('data-background-color'),
                renderHTML: attributes => {
                    return {
                        'data-background-color': attributes.backgroundColor,
                        style: `background-color: ${attributes.backgroundColor}`,
                    }
                },
            },
        }
    },
})

export const Provider = ({ children }: TP) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Table.configure({
                resizable: true,
            }),
            CustomTableCell,
            TableHeader,
            TableRow,
            Color,
            TextStyle,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TextSize,
            ButtonExtension
        ],
        content: save()
    })

    if (!editor) {
        return null
    }

    return (
        <Context.Provider value={{ editor }}>
            {children}
        </Context.Provider>
    )
}