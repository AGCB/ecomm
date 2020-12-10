import './App.scss';
import HomePage from './pages/HomePage';
import HatsPage from './pages/HatsPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Ecomm Site</h1>
      <Switch>
        <Route path="/hats" component={HatsPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
