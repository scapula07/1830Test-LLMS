import React from 'react'

export default function Button({name,cname}) {
  return (
    <button className={cname}>
        {name}
    </button>
  )
}
