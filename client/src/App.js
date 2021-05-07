import './App.css';
import API from './utils/API'

function App() {

  const characterList = API.searchCharacter("kalim arri")
  console.log(characterList.data)

  return (
    <div className="App">
      <header className="App-header">
        {/* {characterList.data.Name} */}
      </header>
    </div>
  );
}

export default App;
