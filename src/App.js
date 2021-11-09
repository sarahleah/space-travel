import './reset.css'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Destinations from './Components/Pages/Destinations'
import Crew from './Components/Pages/Crew';
import Tech from './Components/Pages/Tech';

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
        <Route path='/crew'>
          <Crew />
        </Route>
        <Route path='/technology'>
          <Tech />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
