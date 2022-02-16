import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Landing from './screens/Landing'
import Explore from './screens/Explore'
import ReadBlog from './screens/ReadBlog'
import UserContent from './screens/UserContent'
import Navigation from './components/Navigation';
import Compose from './screens/Compose';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/blog/:id' element={<ReadBlog/>} />
          <Route path='/user/:username' element={<UserContent/>} />
          <Route path='/compose' element={<Compose/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
