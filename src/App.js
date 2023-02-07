import Anima from "./components/Anima";
import Astronauta from "./components/astronauta/Astronauta";
import BarraNegra from "./components/barraNegra/BarraNegra";
import Mint from "./components/Mint"    
import Navbar from "./components/Navbar/Navbar";
import Statue from "./components/Statue/Statue";
import TextoRotar from "./components/textoRotar/TextoRotar";
import "./global.css";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="scenario">
        <Anima />
      </div>
      <BarraNegra />
      
      <Astronauta />
      <TextoRotar />
      <Mint />
      <Statue />
    </>
  );
};

export default App;
