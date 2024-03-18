import React from "react"

export default function ({ children }: {
  children: React.ReactNode
}) {
  return <div>
    <div className="border-b text-center">
      20% off for next 3 days
    </div>
    {children}
  </div>
}
