import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <section 
      className="
        absolute top-1/2 left-1/2 flex flex-col mt-20 p-8 gap-6 w-11/12 rounded-2xl bg-white
        md:my-0 md:w-[672px]
      "
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {children}
    </section>
  )
}

export default Container;