import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <section 
      className="absolute top-1/2 left-1/2 flex flex-col p-8 rounded-2xl w-[672px] bg-white"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {children}
    </section>
  )
}

export default Container;