import './App.css';
import data from './data'
import Friend from './Friend';

const friendsList = data.map((friend, index) => {
  return (
      <Friend
          key={index}
          friend={friend}
          pets={friend.pets}
      />
  )
}) 



function App() {
  return (
    <div className="App">
      {friendsList}
    </div>
  );
}
export default App;

