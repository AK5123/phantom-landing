import './App.css';
import About from './components/About/About';
import Auction from './components/Auction/Auction';
import Header from './components/Header/Header';
import ProtocolBasics from './components/ProtocolBasics/ProtocolBasics';
import TreasuryMakeup from './components/TreasuryMakeup/TreasuryMakeup';

import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div style={{Pwidth: '100%'}}>
      <Header />
      <About />
      <TreasuryMakeup/>
      <ProtocolBasics/>
      <Auction />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
