import './App.css';
import {Helmet} from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

        {/* Policies */}
        {/* Exo */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo&display=swap" rel="stylesheet" />
        {/* Cormorant Garamond */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@0;1&display=swap" rel="stylesheet" />
        {/* Pinyon Script */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet" />
        {/* Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />

        <script src="https://kit.fontawesome.com/63bb0c1095.js" crossorigin="anonymous"></script>

        <title translate='no'>Au verger B&B</title>
        
        <link rel="canonical" href="http://auverger.com/" />
      </Helmet>

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