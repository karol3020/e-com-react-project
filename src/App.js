import Nav from './components/Nav.jsx'
import Landing from './components/Landing.jsx'
import HighLights from './components/HighLights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';
import Explore from './components/Explore.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <HighLights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
