import './App.scss';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

function HatsPage(props) {
  return (
    <span>hatsPage</span>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Ecomm Site</h1>
      <Switch>
        <Route path="/hats/:customId" component={HatsPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
