import { Layout } from './Layout'
import { AreaEditor } from './TipEditor/AreaEditor'
import { Panel } from './TipEditor/Panel'
import { useEditor } from '@tiptap/react'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

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

export const Editor: React.FC = () => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Table.configure({
                resizable: true,
            }),
            CustomTableCell,
            TableHeader,
            TableRow
        ],
        content: '<p>Hello world</p>'
    })

    if (!editor) {
        return null
    }

    return (
        <Layout
            editor={<AreaEditor editor={editor!} />}
            panel={<Panel editor={editor!} />}
        />
    )
}