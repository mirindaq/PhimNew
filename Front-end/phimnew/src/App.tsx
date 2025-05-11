import './App.css'
import useRouteElements from './routes/useRouteElements'

function App() {
  const router = useRouteElements()
  return (
    <>
      {router}
    </>
  )
}

export default App
