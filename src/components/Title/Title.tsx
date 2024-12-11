import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

function Title({ children }: TitleProps) {
  return (
    <h1 className="text-2xl font-bold">
      {children}
    </h1>
  )
}

export default Title