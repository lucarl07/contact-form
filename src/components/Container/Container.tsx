import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <section className="
      flex flex-col mx-4 my-4 p-8 gap-6 rounded-2xl bg-white
      sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2 
      sm:m-0 sm:w-11/12 
      md:w-[672px]
    ">
      {children}
    </section>
  )
}

export default Container;