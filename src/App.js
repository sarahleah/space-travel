import './reset.css'
import './base.css'
import './general.css'

import Nav from './Components/Blocks/Nav';

import { Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Destinations from './Components/Pages/Destinations'
import Crew from './Components/Pages/Crew';
import Tech from './Components/Pages/Tech';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className={`App ${page}`}>
      <Nav funcs={[page, setPage]}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/destinations'>
          <Destinations />
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
