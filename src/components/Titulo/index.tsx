import React from 'react'

function Titulo(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) {
  return <h1>{props.children}</h1>
}

export default Titulo
