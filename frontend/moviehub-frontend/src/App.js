import './App.css';
import Login from './components/login';
import Register from './components/register';
import SearchMovie from './components/searchMovie';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      <SearchMovie/>
    </div>
  );
}

export default App;
