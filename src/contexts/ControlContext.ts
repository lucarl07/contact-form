import { createContext } from 'react'

interface IControlContext {
  field: string
  error: string
}

const ControlContext = createContext<IControlContext>({ field: '', error: '' })

export default ControlContext;