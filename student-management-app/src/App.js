import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { ApiRoutes } from './ApiRoutes';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Home></Home> */}
        <ApiRoutes></ApiRoutes>
      </div>
    </div>
  );
}

export default App;
