import './reset.css'
import './base.css'
import './general.css'
import './page-transition.css'

import Nav from './Components/Blocks/Nav';

import { Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Destinations from './Components/Pages/Destinations'
import Crew from './Components/Pages/Crew';
import Tech from './Components/Pages/Tech';

import { CSSTransition } from 'react-transition-group';

import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className={`App ${page}`}>
      <Nav funcs={[page, setPage]}/>
      {/* <Route exact path='/'>
        <Home setPage={setPage}/>
      </Route> */}
      <Route path='/destinations'>
      {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit={true}
          >
            <Destinations />
          </CSSTransition>
        )}
      </Route>
      <Route path='/crew'>
      {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit={true}
          >
            <Crew />
          </CSSTransition>
        )}
      </Route>
      <Route path='/technology'>
      {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit={true}
          >
            <Tech />
          </CSSTransition>
        )}
      </Route>
      <Route exact path='/'>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit={true}
          >
            <Home setPage={setPage}/>
          </CSSTransition>
        )}
      </Route>
    </div>
  );
}

export default App;
