import './App.scss';
import HomePage from './pages/HomePage';
import SneakersPage from './pages/SneakersPage';
import HatsPage from './pages/HatsPage';
import PantsPage from './pages/PantsPage';
import ShopPage from './pages/ShopPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Ecomm Site</h1>
      <Switch>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
