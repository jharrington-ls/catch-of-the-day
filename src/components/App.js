import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        // getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }
    addFish(fish){
        //Update our state
        const fishes = {...this.state.fishes}; //the ... is an ES6 spread and in this instance just dupliactes the object
        //Add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //Set State
        this.setState({fishes: fishes});
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;