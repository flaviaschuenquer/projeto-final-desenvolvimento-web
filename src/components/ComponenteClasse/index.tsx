import React from 'react'

class ComponenteClasse extends React.Component {
  state = {
    nome: 'Hugo e Vinícius'
  }

  handleClick = () => {
    if (this.state.nome === 'Fulano') {
      this.setState({ nome: ' ' })
    } else {
      this.setState({ nome: 'Fulano' })
    }
  }

  componentDidMount() {
    console.log('criou')
  }

  componentDidUpdate() {
    console.log('Atualizou')
  }

  componentWillUnmount() {
    console.log('removeu')
  }

  render() {
    console.log('Renderizou')
    return (
      <div>
        <h1>Hello {this.state.nome}</h1>

        <button onClick={this.handleClick}>Clique aqui</button>
      </div>
    )
  }
}

export default ComponenteClasse
