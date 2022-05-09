import React from 'react'

export default function ListItem({data}) {
  return (
    <li className="col">{data.logo}{data.title}</li>
  )
}
