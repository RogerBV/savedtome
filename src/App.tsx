import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SaveProduct from './components/ProductItemScreen'
import ProductCRUD from './components/ProductCRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProductCRUD />
    </div>
  )
}

export default App
