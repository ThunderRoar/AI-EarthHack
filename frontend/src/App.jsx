import './App.css'

import EvalPanel from './components/EvalPanel';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';
import DescPanel from './components/DescPanel';
import SortPanel from './components/SortPanel';

function App() {

  let entries = GetMockData();

  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <InfoPanel/>
        <DescPanel></DescPanel>
        <EvalPanel/>
        <SortPanel isVisible={true} data={entries}></SortPanel>
        <Footer/>
      </div>
    </main>
  )
}

export default App;

function GetMockData(){
  return (
    [
      {
        ID: 0,
        rankings: [1, 2, 3],
        problem: "foo",
        solution: "foobar"
      }, 
      {
        ID: 1,
        rankings: [3, 2, 1],
        problem: "oof",
        solution: "oofrab"
      }, 
      {
        ID: 2,
        rankings: [2, 3, 2],
        problem: "foofoo",
        solution: "foofoobar"
      }, 
      {
        ID: 3,
        rankings: [3, 3, 3],
        problem: "foofoofoo",
        solution: "foofoofoobar"
      }, 
      {
        ID: 4,
        rankings: [1, 1, 1],
        problem: "oofoofoof",
        solution: "bar"
      }, 
    ]
  )
}
