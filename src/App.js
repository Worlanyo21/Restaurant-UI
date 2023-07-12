import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import FindUs from './container/Findus/FindUs'
import './App.css';
import { Navbar } from './components';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
  );
}

export default App;
