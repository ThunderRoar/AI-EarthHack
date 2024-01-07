import './App.css'

import EvalPanel from './components/EvalPanel';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';
import DescPanel from './components/DescPanel';
import SortPanel from './components/SortPanel';

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
        <SortPanel isVisible = {true} parameter={GetMockData()}></SortPanel>
        <Footer/>
      </div>
    </main>
  )
}

export default App;

function GetMockData(){
  return JSON.stringify(
    [
      {
        rankings: [1, 2, 3],
        problem: "foo",
        solution: "foobar"
      }, 
      {
        rankings: [3, 2, 1],
        problem: "oof",
        solution: "oofrab"
      }, 
      {
        rankings: [2, 3, 2],
        problem: "foofoo",
        solution: "foofoobar"
      }, 
      {
        rankings: [3, 3, 3],
        problem: "foofoofoo",
        solution: "foofoofoobar"
      }, 
      {
        rankings: [1, 1, 1],
        problem: "oofoofoof",
        solution: "bar"
      }, 
    ]
  )
}
