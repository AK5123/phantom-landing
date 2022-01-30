import './App.css';
import About from './components/About/About';
import Auction from './components/Auction/Auction';
import Header from './components/Header/Header';
import ProtocolBasics from './components/ProtocolBasics/ProtocolBasics';
import TreasuryMakeup from './components/TreasuryMakeup/TreasuryMakeup';

function App() {
  return (
    <div style={{backgroundColor: 'grey', width: '100%'}}>
      <Header />
      <About />
      <TreasuryMakeup/>
      <ProtocolBasics/>
      <Auction />

    </div>
  );
}

export default App;
