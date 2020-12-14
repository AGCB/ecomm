import './App.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Ecomm Site</h1>
      <Header/>
      <Switch>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
