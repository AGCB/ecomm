import './App.scss';
import HomePage from './components/HomePage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props.match.params.foo);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/hats/:foo' component={HatsPage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
