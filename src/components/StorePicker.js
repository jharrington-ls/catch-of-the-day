import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event){
        event.preventDefault();
        console.log("You changed the url");
        //First get the store name from the input
        console.log(this.storeInput.value);
        //Second update the url with React Router
    }
    render(){
        //This is a normal Javascript comment
        return(
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/* This is a JSX comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;