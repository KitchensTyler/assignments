import './App.css';
import Colors from './Colors'
import Buttons from './Buttons';
import {useState} from 'react'

function App() {

  

  const [color, setColor] = useState(
    ["white", "white", "white", "white"])

  function djSmall(){
    if (color[0] === "white"){
      setColor(["black","black","black","black"])
    } else if (color[0] !== "white"){
      setColor(["white", "white", "white", "white"])
    }
  }

  function topPurp(){
    setColor(["purple","purple",color,color])
  }

  function leftBlue(){
    setColor([color,color,"blue",color])
  }

  function rightBlue (){
    setColor([color,color,color,"blue"])
  }

  function bigTime0 (){
    setColor(["gold","blue","blue","gold"])
  }

  function bigTime1 (){
    setColor([color,"magenta",color,"purple"])
  }
  function bigTime2 (){
    setColor(["blue","red","red","blue"])
  }
  function bigTime3 (){
    setColor(["orange","white","white","orange"])
  }

  function makeNoise (){

  }

  return (
    <div className="App">
      <h1 className='header'>DJ React</h1>
      <Colors style0={{backgroundColor: color[0]}}  style1={{backgroundColor: color[1]}} style2={{backgroundColor: color[2]}} style3={{backgroundColor: color[3]}}/>
      <Buttons djSmall={djSmall} topPurp={topPurp} leftBlue={leftBlue} rightBlue={rightBlue} bigTime0={bigTime0} bigTime1={bigTime1} bigTime2={bigTime2} bigTime3={bigTime3} makeNoise={makeNoise}/>

    </div>
  );
}

export default App;
