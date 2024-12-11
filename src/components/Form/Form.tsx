import React from 'react'

interface FormProps 
  extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

function Form({ children, ...rest }: FormProps) {
  return (
    <form {...rest}>
      {children}
    </form>
  )
}

export default Form