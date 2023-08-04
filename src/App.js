
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Creator from './components/pages/Creator'
import Community from './components/pages/Community'
import Subscribe from './components/pages/Subscribe'
import Stories from './components/pages/Stories'


function App() {
  return (
    <div className="App">

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/creator' element={<Creator/>}/>
<Route path='/stories' element={<Stories/>}/>
<Route path='/subscribe' element={<Subscribe/>}/>
<Route path='/community' element={<Community/>}/>
</Routes>
    </div>
  );
}

export default App;
