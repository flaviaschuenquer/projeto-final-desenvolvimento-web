import React from 'react'

function DiretoFilho(props: {
  nome:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  idade:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
  nerd: any
}) {
  return (
    <>
      <span>{props.nome} </span>
      <span>{props.idade} </span>
      <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
    </>
  )
}

export default DiretoFilho
