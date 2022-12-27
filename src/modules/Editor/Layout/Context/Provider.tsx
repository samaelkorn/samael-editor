
import { useState } from 'react'
import { Context } from './context'
import type { TPage } from './context'

interface TP {
    children: React.ReactNode
}


export const ProviderTypePage = ({ children }: TP) => {
    const [type, setType] = useState<TPage>('fullWidth')
    const [image, setImage] = useState<string>('')

    return (
        <Context.Provider value={{ type, setType, image, setImage }}>
            {children}
        </Context.Provider>
    )
}