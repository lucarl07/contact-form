import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <section className="
      flex flex-col mx-4 my-4 p-8 gap-6 rounded-2xl bg-white
      md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2 
      md:m-0 md:w-[672px]
    ">
      {children}
    </section>
  )
}

export default Container;