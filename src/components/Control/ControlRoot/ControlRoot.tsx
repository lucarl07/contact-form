import React from 'react'
import ControlContext from 'contexts/ControlContext'

interface ControlRootProps {
  field: string
  error: string
  children: React.ReactNode
}

function ControlRoot({ field, error, children }: ControlRootProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <ControlContext.Provider value={{ field, error }}>
        {children}
      </ControlContext.Provider>
      {error.length > 0 && (
        <span className="text-lc-red">
          {error}
        </span>
      )}
    </div>
  )
}

export default ControlRoot
