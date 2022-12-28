import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'
import Button from '@mui/material/Button'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        reactComponent: {
            addButton: () => ReturnType
        }
    }
}

const Component = (props: any) => {
    const increase = () => {
        props.updateAttributes({
            count: props.node.attrs.count + 1,
        })
    }

    return (
        <NodeViewWrapper className="react-component">
            <div className="content">
                <Button onClick={increase} variant="contained">
                    This button has been clicked {props.node.attrs.count} times.
                </Button>
            </div>
        </NodeViewWrapper>
    )
}

export const ButtonExtension = Node.create({
    name: 'reactComponent',

    group: 'block',

    atom: true,

    addAttributes() {
        return {
            count: {
                default: 0,
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'react-component',
            },
        ]
    },

    addCommands() {
        return {
            addButton: () => ({ commands }) => {
                return commands
                    .insertContent({
                        type: this.name,
                        attrs: { count: 1 },
                    })
            },
        }
    },

    renderHTML({ HTMLAttributes }) {
        return ['react-component', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },
})