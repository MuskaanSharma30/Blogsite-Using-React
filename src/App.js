import "./App.css"
import Navbar from './components/navbar'
import Homepage from './components/Homepage'
import AddBlog from './components/AddBlog'
import Aboutpg from './components/Aboutpg'
import Displayblog from './components/Displayblog'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'  // 1. router is outermost tag,2. Switch displays one of the components at a time,3. Routeis used to define the path of a single component


const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
         <Route
          exact path= "/" component= {Homepage}
         />
         <Route
          exact path= "/addblog" component= {AddBlog}
         />
         <Route
         exact path= "/about" component= {Aboutpg}
         />
         <Route
         exact path= "/display/:id" component = {Displayblog}  // display/:id here id is the parameter which is unique for each blog
         />
      </Switch>
    </div>
    </Router>
  )
}

export default App







// import "./App.css"
// import Navbar from './components/navbar'
// import Homepage from './components/Homepage'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Homepage/>
//     </div>
//   )
// }

// export default App

