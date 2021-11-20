import React from 'react'
import './style.css'

function Card(props: {
  titulo:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) {
  return (
    <div className="card">
      <div className="card-titulo">
        <h4>{props.titulo}</h4>
      </div>
      <div className="card-content">{props.children}</div>
    </div>
  )
}

export default Card
