import React from 'react'

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="p-4 w-full rounded-md bg-lc-green-600 font-medium text-white" {...rest}>
      {children}
    </button>
  )
}