import { createContext } from 'react'

export type TPage = 'fullWidth' | 'image'

interface ContextType {
    setType: (type: TPage) => void
    type: TPage
    image: string
    setImage: (img: string) => void
}

export const Context = createContext<ContextType>(null!)
