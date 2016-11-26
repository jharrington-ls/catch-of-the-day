import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    render(){
        //This is a normal Javascript comment
        return(
            <form className="store-selector">
                {/* This is a JSX comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;