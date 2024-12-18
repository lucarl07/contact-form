import React from 'react'
import ControlContext from 'contexts/ControlContext'

type ControlTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

function ControlTextArea(props: ControlTextAreaProps) {
  const { field, error } = React.useContext(ControlContext)
  const borderColor = error.length > 0 ? 'border-lc-red' : 'border-gray-400'

  return (
    <textarea
      {...props} id={field} name={field}
      className={`
        p-4 w-full border ${borderColor} rounded-md resize-none
        hover:border-lc-green-600 
        focus:border-lc-green-600 focus:outline-none
      `} />
  )
}

export default ControlTextArea
