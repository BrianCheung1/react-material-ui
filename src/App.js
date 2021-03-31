import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Article from "./components/Article"
import { withWidth } from "@material-ui/core";

function App() {
  return (
    <div className="App" style={{
      backgroundColor: 'black'
    }}>
      <Navbar/>
      <Hero/>
      <Article/>
    </div>
  );
}

export default App;
