import React from 'react'
import ControlContext from 'src/contexts/ControlContext'

type ControlErrorProps = React.InputHTMLAttributes<HTMLInputElement>

function ControlError(props: ControlErrorProps) {
  const { error } = React.useContext(ControlContext)

  return (
    <span {...props} className="text-lc-red">
      {error}
    </span>
  )
}

export default ControlError
