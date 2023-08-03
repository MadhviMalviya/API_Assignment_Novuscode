
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Heading from './components/heading/Heading';
import Main from './components/mainSection/Main';
import MidSection from './components/midSection/MidSection';


import Search from './components/searchbox/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
     <Main/>
     <MidSection/>
      <Search/>
      <Footer />
    </div>
  );
}

export default App;
