import React, { Fragment } from 'react'
import Nav from './Mavric/Nav';
import Movies from './Mavric/Movies';
import About from './Mavric/About'
import {Switch,Route} from 'react-router-dom'
import ErrorBoundary from './Mavric/ErrorBoundary';

function App() {
  return (
   <Fragment>
     <ErrorBoundary>
      <Nav/>
      </ErrorBoundary>
      <Switch>
      <ErrorBoundary>
        <Route  exact path="/MovieList" component={Movies}></Route>
        <Route  path="/MovieDetails/:id" component={About}></Route>
        </ErrorBoundary>
      </Switch>
      </Fragment>
  );
}


export default App;



