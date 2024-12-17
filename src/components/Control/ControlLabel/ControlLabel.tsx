import React from 'react'
import ControlContext from 'contexts/ControlContext'

interface ControlLabelProps {
  children: React.ReactNode
  required: boolean | 'true' | 'false'
}

function ControlLabel({ children, required = false }: ControlLabelProps) {
  const { field } = React.useContext(ControlContext)

  return (
    <label htmlFor={field}>
      {children}
      {(required == true || required == "true") && (
        <span className="text-lc-green-600"> * </span>
      )}
    </label>
  )
}

export default ControlLabel
