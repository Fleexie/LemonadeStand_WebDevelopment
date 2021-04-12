import { render } from '@testing-library/react';
import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import About from './about';
import LemonadeStand from './lemonadeStand';
import Recipe from './recipe';


class Header extends React.Component{

active = (self) => {

    switch(self){
        case 'indexActive':
            document.title = 'LemonadeStand - Index';
        break
        case 'aboutActive':
            document.title = 'LemonadeStand - About';
        break
        case 'recipeActive':
            document.title = 'LemonadeStand - Recipe';
        break

    }
};
render(){
    
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/reactlemonade/" onClick={() => this.active('indexActive')}>Front</Link>
                        </li>
                        <li>
                            <Link to="/reactlemonade/about" onClick={() => this.active('aboutActive')}>About</Link>
                        </li>
                        <li>
                            <Link to="/reactlemonade/recipe" onClick={() => this.active('recipeActive')}>Recipe</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    
}

export default Header;