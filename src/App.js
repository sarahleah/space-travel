import './reset.css'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Destinations from './Components/Pages/Destinations'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/destinations'>
          <Destinations/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
