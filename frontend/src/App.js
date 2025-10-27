 import {BrowserRouter, Routes, Route} from 'react-router-dom'
 // BrowserRouter wraps everywhere the router will be used, Routes wraps all of the individual routes, individual route component to create a single route

 // pages & components
 import Home from './pages/Home'
 import Navbar from './components/Navbar'

 // can output above all of the pages but still inside the BorwserRouter otherwise cant use the Link component because everything to do with the router needs to be inside BrowserRouter
 // the rotuer needs to be inside 
function App() {
  return (
    <div className="App">
      <BrowserRouter>  {/*surronds everything that needs to use the routing system */}
        <Navbar />
        <div className="pages"> {/* all pages inside here */}
          <Routes>
            <Route 
              path="/"
               element={<Home />}  /*element that will be rendered for this route - Home component being rendered for the root path "/" */
            />

          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
