import React from 'react'

interface FormProps 
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

function Form({ children, ...rest }: FormProps) {
  return (
    <form {...rest} className="flex flex-col gap-5">
      {children}
    </form>
  )
}

export default Form