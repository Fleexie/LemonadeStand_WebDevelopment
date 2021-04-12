import React from 'react';
import {connect} from 'react-redux';
import { sellLemonade, createLemonade } from '../actions'
import '../App.css';

class LemonadeStand extends React.Component {
    componentDidMount(){
        document.title = 'Lemonade Stand - Home'
    }
    render(){
        return(
            <div>
            <h1 className="headline">Lemonade <span>$2</span></h1>


            <div className="lemonadeStand">

                <div className="money">
                    <h2>Money</h2>
                    <h3>Cash: ${this.props.money}</h3>
                    {this.props.stocks > 0 ? <button onClick={this.props.sellLemonade}>Sell Lemonade</button> : <span>Out of stock</span>}

                </div>

                
                <div className="stock">
                    <h2>Stock</h2>
                    <h3>In stock: {this.props.stocks} {this.props.stocks > 1 ? 'Lemonades' : 'Lemonade'}</h3>
                    {this.props.money > 0 ? <button onClick={this.props.createLemonade}>Make Lemonade</button> : <span>Need more money</span>}

                </div>


                
            </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        money: state.cash,
        stocks: state.stock
    }
}

function mapDispatchToProps (dispatch) {
    return{
        sellLemonade: () => {dispatch(sellLemonade())},
        createLemonade: () => {dispatch(createLemonade())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LemonadeStand);