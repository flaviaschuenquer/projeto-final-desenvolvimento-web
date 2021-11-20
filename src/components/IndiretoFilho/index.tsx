import React from 'react'

function ComponenteFilho(props: {
  setInformacaoPai: (arg0: string, arg1: number, arg2: boolean) => void
}) {
  return (
    <>
      <button onClick={() => props.setInformacaoPai('Jorge', 50, true)}>
        Passar Informações para o pai
      </button>
    </>
  )
}

export default ComponenteFilho
