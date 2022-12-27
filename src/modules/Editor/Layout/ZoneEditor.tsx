import Box from '@mui/material/Box'
import { useTypePage } from './Context'

interface TP {
    children: React.ReactNode
}

export const ZoneEditor = ({ children }: TP) => {
    const { type, image } = useTypePage()
    return (
        <>
            {type === 'fullWidth'
                ? <Box sx={{ width: '100%' }}>
                    {children}
                </Box>
                : <Box sx={{ width: '100%', display: 'flex' }}>
                    <Box sx={{ width: '50%', backgroundImage: `url("${image}")` }}>

                    </Box>
                    <Box sx={{ width: '50%' }}>
                        {children}
                    </Box>
                </Box>
            }
        </>
    )
}