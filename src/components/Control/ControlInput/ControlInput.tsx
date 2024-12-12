import React from 'react'
import ControlContext from 'contexts/ControlContext'

interface ControlInputProps 
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: string
  error?: string
}

function Radio({ field, id, value }: ControlInputProps) {
  return (
    <div className="flex items-center px-5 w-full h-12 gap-3 border border-gray-400 rounded-md">
      <input 
        type='radio' id={id} name={field} 
        className="border border-gray-300 rounded-full size-4 accent-lc-green-600" />
      <label htmlFor={id}>
        {value}
      </label>
    </div>
  )
}

function DefaultInput({ field, error, type }: ControlInputProps) {
  const borderColor = error!.length > 0 ? 'border-lc-red' : 'border-gray-400'
  
  return (
    <input 
      type={type} id={field} name={field}
      className={`px-4 w-full border ${borderColor} rounded-md h-12`} />
  )
}

export default function ControlInput(props: ControlInputProps) {
  const { field, error } = React.useContext(ControlContext)

  switch (props.type) {
    case 'radio':
      return <Radio field={field} id={props.id} value={props.value} />
    default:
      return <DefaultInput field={field} error={error} type={props.type || 'text'} />
  }
}
