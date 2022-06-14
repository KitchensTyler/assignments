import './App.css';
import Card from './Card'
import data from './data.js'

const cards = data.map(item => {
  return (
    <Card 
        key = {item.place}
        item={item}
        />
  )
})


export default function App() {

  return (
    <div className="App">
      {cards}
    </div>
  );
}
