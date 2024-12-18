import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <section 
      className="absolute top-1/2 left-1/2 flex flex-col gap-6 p-8 w-[672px] rounded-2xl bg-white"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {children}
    </section>
  )
}

export default Container;