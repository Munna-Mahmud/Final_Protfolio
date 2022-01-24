import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Home/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Footer from './components/Home/Footer/Footer';

function App() {
   return (
      <div className="App">

         <Router>
            <Navigation></Navigation>
            <Switch>

               <Route exact path="/">
                  <Home></Home>
               </Route>

               <Route exact path="/home">
                  <Home></Home>
               </Route>

               <Route exact path="/about">
                  <About></About>
               </Route>

               <Route exact path="/contact">
                  <Contact></Contact>
               </Route>

            </Switch>
            {/* <Footer></Footer> */}
         </Router>
      </div>
   );
}

export default App;
