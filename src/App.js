import './App.css';
import Header from './components/header';
import FloatingBtn from './components/floatingBtn';
import NavDesktop from './components/navDesktop';
import FloatingMenu from './components/floatingMenu';
import Carousel from './components/carousel';
import Parts from './components/parts';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />

      <FloatingBtn />
      <NavDesktop />
      <FloatingMenu />
      <Carousel />
      <Parts />

      <Footer />
    </div>
  );
}

export default App;