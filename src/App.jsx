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
import Reviews from './Components/Reviews'
import AboutUs from './Components/AboutUs'
import CustomerEngagement from './Components/CustomerEngagement'
function App() {


  return (
    <div>
    <NavBar />
    <Home />
    <Rotating />
    <AboutUs />
   <Example />
   <CustomerEngagement />
   {/* <Reviews /> */}
   <News />
   <Footer />
    
    </div>
  )
}

export default App
