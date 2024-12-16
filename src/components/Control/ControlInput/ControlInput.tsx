import React from 'react'
import ControlContext from 'contexts/ControlContext'

interface ControlInputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: string /* Name of the input field or group */
  desc?: string /* Description for individual radios on a group */
  error?: string
}

function Radio({ field, desc, ...rest }: ControlInputProps) {
  return (
    <div className="flex items-center px-5 w-full h-12 gap-3 border border-gray-400 rounded-md">
      <input 
        type='radio' name={field} id={rest.id} value={rest.value} {...rest}
        className="border border-gray-300 rounded-full size-4 accent-lc-green-600" />
      <label htmlFor={rest.id}>
        {desc}
      </label>
    </div>
  )
}

function Checkbox({ field, ...rest }: ControlInputProps) {
  return (
    <input 
      type='checkbox' id={field} name={field} {...rest}
      className="size-4 accent-lc-green-600" />
  )
}

function DefaultInput({ field, error, type, ...rest }: ControlInputProps) {
  const borderColor = error!.length > 0 ? 'border-lc-red' : 'border-gray-400'
  
  return (
    <input 
      type={type} id={field} name={field} {...rest}
      className={`px-4 w-full border ${borderColor} rounded-md h-12`} />
  )
}

export default function ControlInput(props: ControlInputProps) {
  const { field, error } = React.useContext(ControlContext)

  switch (props.type) {
    case 'radio':
      return <Radio field={field} id={props.id} value={props.value} {...props} />
    case 'checkbox':
      return <Checkbox field={field} {...props} />
    default:
      return <DefaultInput field={field} error={error} type={props.type || 'text'} {...props} />
  }
}
