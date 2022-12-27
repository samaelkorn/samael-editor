import { useContext } from 'react'
import { Context } from './context'

export const useEditor = () => useContext(Context)
