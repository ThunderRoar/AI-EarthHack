import './App.css'

import EvalPanel from './components/EvalPanel';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <InfoPanel/>
        <EvalPanel/>
        <Footer/>
      </div>
    </main>
  )
}

export default App;
