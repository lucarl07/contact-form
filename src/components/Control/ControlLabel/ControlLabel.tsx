import React from 'react'
import ControlContext from 'contexts/ControlContext'

interface ControlLabelProps {
  children: React.ReactNode
}

function ControlLabel({ children }: ControlLabelProps) {
  const { field } = React.useContext(ControlContext)

  return (
    <label htmlFor={field}>
      {children}
    </label>
  )
}

export default ControlLabel
