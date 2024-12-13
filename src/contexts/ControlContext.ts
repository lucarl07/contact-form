import { createContext } from 'react'

const ControlContext = createContext<IControlContext>({ field: '', error: '' })

export default ControlContext;