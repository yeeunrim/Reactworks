import './App.css';
import MyCompent from './MyCompent1';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <h2>리액트 시작하기</h2>
      <MyCompent name={"임예응"} age={"24"} />
      <img src={logo} className='App-logo'></img>
    </div>
  );
}

export default App;
