import React from 'react'

function Formulario(props: {
  inputValue: string | number | readonly string[] | undefined
  handleChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: React.MouseEventHandler<HTMLButtonElement> | undefined
}) {
  return (
    <>
      <input
        type="text"
        value={props.inputValue}
        onChange={e => props.handleChange(e)}
      />
      <button onClick={props.handleSubmit}>Enviar</button>
    </>
  )
}

export default Formulario
