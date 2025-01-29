import { createContext } from 'react'

const ControlContext = createContext<IControlContext>({ field: '', type: undefined, error: '' })

export default ControlContext;