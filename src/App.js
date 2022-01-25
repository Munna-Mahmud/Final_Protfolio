import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Home/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Protfolio from './components/Protfolio/Protfolio';
import All from './components/Protfolio/Router/Nasted_Pages/All/All';
import Youtube from './components/Protfolio/Router/Nasted_Pages/Youtube/Youtube';
import WebDesign from './components/Protfolio/Router/Nasted_Pages/Web_Desing/WebDesign';
// import Footer from './components/Home/Footer/Footer';
import ReactProject from './components/Protfolio/Router/Nasted_Pages/React_Project/ReactProject';
import Photographs from './components/Protfolio/Router/Nasted_Pages/Photographs/Photographs';

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

               <Route exact path="/all">
                  <All></All>
                  {/* <Protfolio></Protfolio> */}
               </Route>


               <Route exact path="/blog">
                  <Blog></Blog>
               </Route>

               <Route exact path="/contact">
                  <Contact></Contact>
               </Route>

               {/* nasted all router  */}
               <Route exact path="/all">
                  <All></All>
                  {/* <Protfolio></Protfolio> */}
               </Route>
               
               <Route exact path="/youtube">
                  <Youtube></Youtube>
               </Route>

               <Route exact path="/webdesign">
                  <WebDesign></WebDesign>
               </Route>

               <Route exact path="/react">
                  <ReactProject></ReactProject>
               </Route>
               
               <Route exact path="/photographs">
                <Photographs></Photographs>
               </Route>

            </Switch>
            {/* <Footer></Footer> */}
         </Router>
      </div>
   );
}

export default App;
