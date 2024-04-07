import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './utils/routes'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
        { routes.map( route => (
          <Route path={route.path} element={route.element} key={route.path}/>
        ))}
        </Routes>
      </main>
    </>
  )
}

export default App
