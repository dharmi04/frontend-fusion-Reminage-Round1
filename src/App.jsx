import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Rotating from './Components/Rotating'
// import Beveragemenu from './Components/beveragemenu'
// import Friesandsides from './Components/friesandsides'
// import Breakfast from './Components/breakfast'
// import Chickensandwich from './Components/chickensandwich'
// import Meals from './Components/meals'
// import Coffee from './Components/coffeeandsweets'

import Example from './Components/Menu'
import News from './Components/News'
import Footer from './Components/Footer'
function App() {


  return (
    <div>
    <NavBar />
    <Home />
    <Rotating />
   <Example />
   <News />
   <Footer />
    
    </div>
  )
}

export default App
