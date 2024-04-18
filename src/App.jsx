import Menu from './Menu'
import CounterApp from './CounterApp'




function App() {

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Menu />
      <CounterApp value={ 0 }/>
    </div>

  )
}

export default App
