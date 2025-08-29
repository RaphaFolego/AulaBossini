import './style.css'
const App = () => {

  const estilosDoBotao = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'blueviolet',
    width: '100%',
    border: 'none',
    borderRadius: 8,
    color: 'white'
  }

  return(
    <div style={{
      margin: 'auto', 
      width: 768, 
      backgroundColor: '#EEE',
      padding: 12,
      borderRadius: 8,  
    }}>
      <label 
        htmlFor="nome"
        style={{
          display: 'block',
          marginBottom: 4,
        }}
      >
        Nome
      </label>
      <input
      id="nome"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          borderStyle: 'hidden',
          outline: 'none',
          width: '100%',
          borderRadius: 8,
        }}
      >
      
      </input>
      <button
        onClick={() => aoCliclar()}
        style={{estilosDoBotao: estilosDoBotao}}
      >
        (obterTextoDoBotao())
      </button>
    </div>
  )
}

export default App