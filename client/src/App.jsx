import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import {Hero, Mailinglist, Navbar, About, Events, Gallery, Contact } from './Components';
import {Home} from './Pages';
import {Team} from './Pages';
import {Volunteer} from './Pages';
import {Resources} from './Pages';
import {Layout} from './Layout';

export default function App() {
    return (
      <Router>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={ <Home/> }/>
                <Route path="/volunteer" element={<Volunteer/>}/>
                <Route path='/resources' element={<Resources/>}/>
                <Route path="/team" element={<Team/>}/>
            </Route>
            

        </Routes>
      </Router>
    )
  }