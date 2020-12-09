import './App.scss';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

function HatsPage() {
  return (
    <span>hatsPage</span>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Ecomm Site</h1>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
