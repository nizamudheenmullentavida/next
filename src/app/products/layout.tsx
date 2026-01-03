
import React from 'react'

export default function productlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <body>
         {children}
      </body>
    </div>
  )
}
