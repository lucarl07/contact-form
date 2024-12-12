import React from 'react'
import ControlContext from 'contexts/ControlContext'

type ControlInputProps = React.InputHTMLAttributes<HTMLInputElement>

function ControlInput(props: ControlInputProps) {
  const { field, error } = React.useContext(ControlContext)
  const borderColor = error.length > 0 ? 'border-lc-red' : 'border-gray-400'

  if (props.type === 'radio') {
    return (
      <div className="flex items-center px-5 w-full h-12 gap-3 border border-gray-400 rounded-md">
        <input 
          {...props} 
          id={props.id} 
          name={field} 
          className="border border-gray-300 rounded-full size-4 accent-lc-green-600" />
        <label htmlFor={props.id}>
          {props.value}
        </label>
      </div>
    )
  }
  
  return (
    <input 
      {...props} id={field} name={field}
      className={`px-4 w-full border ${borderColor} rounded-md h-12`} />
  )
}

export default ControlInput
