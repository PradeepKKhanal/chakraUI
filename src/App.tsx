import Showcase from "./pages/Showcase"
import { Button } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
function App() {
  const {colorMode,toggleColorMode}=useColorMode()

  return (
   <div>
    <Button  variant='sm' size='xl' onClick={toggleColorMode} bgColor={'secondary'}>Toogle {colorMode==='light'?'Dark':'Light'}</Button>

    <Showcase/>

    
   </div>
  )
}

export default App
