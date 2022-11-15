import "./App.css";
import Header from "./components/header";
import Parts from "./components/parts";
import Footer from "./components/footer";
import BookBtn from "./components/bookBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <Parts />
      <BookBtn />
      <Footer />
    </div>
  );
}

export default App;