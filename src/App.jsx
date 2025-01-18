import { useState } from 'react'
import './App.css'
import ContainerMain from './containerMain/containerMain'
import ContainerSmaller from './containerSmaller/containerSmaller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <ContainerMain 
        path="./src/img/1.png" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam." 
      />
      <div className='container'>
        <ContainerSmaller 
          path="./src/img/2.png" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        />
        <ContainerSmaller 
          path="./src/img/3.png" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        />
        <ContainerSmaller 
          path="./src/img/4.png" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
        />
      </div>
    </div>
  )
}

export default App
