import './App.css'

import EvalPanel from './components/EvalPanel';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';
import DescPanel from './components/DescPanel';

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <InfoPanel/>
        <DescPanel></DescPanel>
        <EvalPanel/>
        <Footer/>
      </div>
    </main>
  )
}

export default App;
