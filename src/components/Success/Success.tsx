import React from 'react'
import icon_success_check from 'images/icon-success-check.svg'

type SuccessProps = React.HTMLAttributes<HTMLElement>

function Success(props: SuccessProps) {
  return (
    <section {...props} className="
      absolute -translate-x-1/2 -translate-y-1/2 top-[10%] left-1/2 
      flex flex-col gap-2 p-5 rounded-lg bg-lc-grey-900
    ">
      <hgroup className="flex gap-3">
        <img src={icon_success_check} alt="Success icon" />
        <h1 className="text-lg text-white font-semibold">
          Message Sent!
        </h1>
      </hgroup>
      <span className="text-white font-light">
        Thanks for completing the form. We'll be in touch soon!
      </span>
    </section>
  )
}

export default Success