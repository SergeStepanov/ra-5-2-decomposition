import React from 'react'

export default function Widget({children, title}) {
  return (
    <section>
      <h4>{title}</h4>
      {children}
    </section>
  )
}
