import { Switch, Route } from 'react-router-dom'
import About from './about';
import lemonadeStand from './lemonadeStand';
import Recipe from './recipe';
import React from 'react'


class Main extends React.Component {

  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/reactlemonade/' component={lemonadeStand}/>
          <Route path='/reactlemonade/about' component={About}/>
          <Route path='/reactlemonade/recipe' component={Recipe}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
